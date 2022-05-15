<template>
  <div class="todo_footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
      <span>
        已完成{{ count }}
      </span>
      全部 {{ lists.length }}
    </span>
    <button class="btn btn_danger" @click="clearAllCompletedTodos">刪除已完成任務</button>
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