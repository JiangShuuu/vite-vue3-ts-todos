<template>
  <div>
    <h3 :style="{color}">GrandSon 孫子組件</h3>
    <button @click="abc">父層method按我</button>
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue';

  // const color = inject('color')
  // const abc = inject('abc')
  const { color, abc } = inject('father')

</script>