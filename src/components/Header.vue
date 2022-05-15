<template>
  <div class="">
    <input type="text" class="w-96 p-2 border-2 rounded-md " placeholder="請輸入你的任務名稱, 按Enter確認" v-model="title" @keyup.enter="add">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  addTodo: {
    type: Function,
    required: true
  }
})

const title = ref('')

const add = () => {

  // 創建text
  const text = title.value
  // 判斷text不為空
  if(!text.trim()) return

  // 創建物件
  const todo = {
    id: Date.now(),
    title: text,
    isCompleted: false
  }

  props.addTodo(todo)
  title.value = ''
}

</script>