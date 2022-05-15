
<template>
  <h2>Provide & inject</h2>
  <p>目前的顏色: {{ color }}</p>
  <button @click="color = 'red'">紅色</button>
  <button @click="color = 'yellow'">黃色</button>
  <button @click="color = 'green'">綠色</button>
  <hr>
  <Child />
</template>

<script setup lang="ts">
  import { provide, ref } from 'vue'
  import Child from './components/Child.vue'
  
  const color = ref('red')
  const abc = () => {
    return console.log(123)
  }

  // 提供數據
  // provide('color', color)
  // provide('abc', abc)

  provide('father', {
    color,
    abc
  })

</script>