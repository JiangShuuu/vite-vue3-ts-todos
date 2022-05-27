<template>
  <div class="flex justify-center item-center">
    <div class="my-6">
      <Header />
      <List />
      <Footer :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import { toRefs, watch } from 'vue';


// 引入interface
import { saveTodos } from './utils/localStorageUtils'
import { useCounterStore } from './stores/counter'
const state = useCounterStore()

// 全選或者非全選
const checkAll = (isCompleted: boolean) => {
  state.todos.forEach(todo => {
    todo.isCompleted = isCompleted
  })
}

// 清除所有選中的數據
const clearAllCompletedTodos = () => {
  state.todos = state.todos.filter(todo => !todo.isCompleted)
}

watch(() => state.todos, saveTodos, { deep: true })


</script>