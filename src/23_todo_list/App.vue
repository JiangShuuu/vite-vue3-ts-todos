<template>
  <div class="flex justify-center item-center">
    <div class="my-6">
      <Header :addTodo="addTodo"/>
      <List :lists="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer :lists="todos" :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import { onMounted, reactive,  toRefs, watch } from 'vue';


// 引入interface
import { Todo } from './types/todo'
import { saveTodos, readTodos } from './utils/localStorageUtils'

// const state = reactive<{todos: Todo []}>({
//   todos: [
//     {
//       id:1, title: 'BMW', isCompleted: false
//     },
//     {
//       id:2, title: 'Toyota', isCompleted: true
//     },
//     {
//       id:3, title: 'Honda', isCompleted: false
//     },
//     {
//       id:4, title: 'Yamaha', isCompleted: true
//     }
//   ]
// })

const state = reactive<{ todos: Todo[] }>({
  todos: []
})

onMounted(() => {
  state.todos = readTodos()
})

// 新增數據
const addTodo = (todo:Todo) => {
  state.todos.unshift(todo)
}

// 刪除數據
const deleteTodo = (index:number) => {
  state.todos.splice(index, 1)
}

// 修改todo狀態
const updateTodo = (todo: Todo, isCompleted:boolean) => {
  todo.isCompleted = isCompleted
  console.log(todo)
}

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

// 若todo數據變化, 儲存到瀏覽器中
// watch (()=> state.todos, (value) => {
//   // 保存到localStorage
//   saveTodos(value)
// }, {deep:true})

watch(() => state.todos, saveTodos, { deep: true })

const { todos } = toRefs(state)

</script>