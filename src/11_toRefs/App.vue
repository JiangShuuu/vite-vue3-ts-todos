<template>
  <h2>toRefs的使用</h2>
  <h3>name: {{ state.name }}</h3>
  <h3>age: {{ state.age }}</h3>
  <hr>
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>
  <hr>
  <h3>name: {{ name2 }}</h3>
  <h3>age: {{ age2 }}</h3>
</template>

<script setup lang="ts">
  import { reactive, toRefs } from 'vue';

  const state = reactive({
    name: '自來也',
    age: 47
  })

  // toRefs 把 reactive響應式對象轉成普通對象, 讓每個 property 都是一個 ref
  const { name, age } = toRefs(state)

  setInterval(() => {
    state.name += '=='
    name.value += '=='
    age.value += 1
  }, 2000)

  // function return 轉成Refs
  function userFeature () {
    const state = reactive({
      name2: '鳴人',
      age2: 18
    })

    return {
      ...toRefs(state)
    }
  }
  
  const {name2, age2} = userFeature()


</script>