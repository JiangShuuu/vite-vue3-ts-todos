<template>
  <div class="flex items-center justify-between">
    <span>
      <input type="checkbox" v-model="isCheckAll"/>
      <span>
        已完成 {{ count }}
      </span>
      <span>
        全部 {{ state.todos.length }}
      </span>
    </span>
    <button class="p-1 text-white bg-red-500 border rounded" @click="clearAllCompletedTodos()">刪除已完成任務</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter'

const state = useCounterStore()

const props = defineProps({
  checkAll: {
    type: Function,
    required: true
  },
  clearAllCompletedTodos: {
    type: Function,
    required: true
  }
})

const count = computed(() => {
  return state.todos.reduce((pre: any, todo: {isCompleted: boolean}, index: number) => pre + (todo.isCompleted ? 1 : 0), 0)
})

const isCheckAll = computed({
  get() {
    return count.value > 0 && state.todos.length === count.value
  },
  set(val) {
    props.checkAll(val)
  }
})

</script>