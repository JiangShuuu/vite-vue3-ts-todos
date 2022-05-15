<template>
  <h2>shallowReadonly & readonly</h2>
  <h3>state: {{ state }}</h3>
  <button @click="update">update</button>
</template>

<script setup lang="ts">
  import { shallowReadonly, reactive, readonly } from 'vue';

  const state = reactive({
    name: '佐助',
    age: 20,
    car: {
      name: 'BMW',
      color: 'yellow'
    }
  })
  
  const state2 = shallowReadonly(state)

  const update = () => {
    // readonly 兩個都不行, 都唯讀
    // shallowReadonly 第二層可以, 第一層唯讀

    // state2.name += '==='
    state2.car.name += '==='
  }
  
</script>
