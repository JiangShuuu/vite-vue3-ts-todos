<template>
  <h2>ref的另一作用: 獲取頁面中的元素</h2>
  <input type="text" ref="inputRef">
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  // ts定義 HTML元件 or null
  const inputRef = ref<HTMLElement | null>(null)

  // mounted階段, 自動focus inputRef
  onMounted(() => {
    inputRef.value&&inputRef.value.focus()
  })

</script>