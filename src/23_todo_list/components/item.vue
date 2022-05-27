<template>
  <li class="my px-3 h-12 flex justify-between items-center" @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)" :style="{backgroundColor: bgColor, color: myColor}">
    <label class=" ">
      <input type="checkbox" class="mr-2" v-model="isCompleted" />
      <span class="font-bold underline">{{ todo.title }}</span>
    </label>
    <button class="border p-1 rounded bg-red-500 text-white" v-show="isShow" @click="delTodo">刪除</button>
  </li>
</template>

<script setup lang="ts">
// import { Todo } from '../types/todo'
import { ref, computed } from 'vue'



const props = defineProps({
  // todo: Object as () => Todo  // 不知為何出錯
  todo: {
    type: Object as any,
    required: true
  },
  deleteTodo: {
    type: Function,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  updateTodo: {
    type: Function,
    required: true
  }
})

const bgColor = ref('white')
const myColor = ref('black')
const isShow = ref(false)

const mouseHandler = (flag: boolean) => {
  if(flag) {
    // 滑鼠進入
    bgColor.value = 'pink'
    myColor.value = 'green'
    isShow.value = true
  } else {
    // 滑鼠移出
    bgColor.value = 'white'
    myColor.value = 'black'
    isShow.value = false
  }
}

// 刪除數據
const delTodo = () => {
  if(window.confirm('確定要刪除嗎?')) {
    props.deleteTodo(props.index)
  }
}

// 計算屬性, 決定打勾/不打勾
const isCompleted = computed({
  get() {
    return props.todo.isCompleted
  },
  set(val) {
    // 對todo中的isCompleted操控
    props.updateTodo(props.todo, val)
  }
})

</script>