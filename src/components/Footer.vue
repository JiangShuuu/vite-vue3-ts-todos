<template>
  <div class="flex justify-between items-center">
    <span>
      <input type="checkbox" v-model="isCheckAll"/>
      <span>
        已完成 {{ count }}
      </span>
      <span>
        全部 {{ lists.length }}
      </span>
    </span>
    <button class="border p-1 rounded bg-red-500 text-white" @click="clearAllCompletedTodos">刪除已完成任務</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Todo } from '../types/todo'

const props = defineProps({
  lists: {
    type: Array as () => Todo [],
    required: true
  },
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
  return props.lists.reduce((pre: any, todo: {isCompleted: boolean}, index: number) => pre + (todo.isCompleted ? 1 : 0), 0)
})

const isCheckAll = computed({
  get() {
    return count.value > 0 && props.lists.length === count.value
  },
  set(val) {
    props.checkAll(val)
  }
})

</script>