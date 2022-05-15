<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新數據</button>
</template>

<script setup lang="ts">

  import { ref } from 'vue'
  const count = ref(0)

  function updateCount() {
    // ref為物件, 物件無法直接進行++
    console.log(count)
    // HTML不需.value，一律在JS中操作
    count.value++
  }

</script>

<style>

</style>
