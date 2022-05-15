
<template>
  <h2>toRef的使用及特點</h2>
  <h3>state: {{ state }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>money: {{ money }}</h3>
  <hr>
  <button @click="update">update</button>
  <Child :age="age" />
</template>

<script setup lang="ts">
import { markRaw, reactive, toRaw, toRef, ref } from 'vue';
import Child from './components/Child.vue'
  const state = reactive({
    age: 5,
    money: 100
  })

  // 淺拷貝, 互相影響
  const age = toRef(state, 'age')

  // 深拷貝, 不互相影響
  const money = ref(state.money)

  console.log(age)
  console.log(money)

  const update = () => {
    console.log('test')
    // state.age += 2
    age.value += 3
    // money.value += 10
  }
</script>