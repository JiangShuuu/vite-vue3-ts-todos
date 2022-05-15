<template>
  <h2>App父層組件</h2>
  <button @click="isShow = !isShow">切換開關</button>
  <hr>
  <Child v-if="isShow"/>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Child from './components/Child.vue'
  
  const isShow = ref(true)
</script>