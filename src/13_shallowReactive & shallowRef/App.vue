<template>
  <h2>shallowReactive & shallowRef</h2>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>
  <hr>
  <button @click="update">更新Data</button>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref, shallowReactive, shallowRef } from 'vue';

  const m1 = reactive({
    name: '鳴人',
    age: 20,
    car: {
      name: 'BMW',
      red: 'red'
    }
  })
  const m2 = shallowReactive({
    name: '鳴人',
    age: 20,
    car: {
      name: 'BMW',
      red: 'red'
    }
  })
  const m3 = ref({
    name: '鳴人',
    age: 20,
    car: {
      name: 'BMW',
      red: 'red'
    }
  })
  const m4 = shallowRef({
    name: '鳴人',
    age: 20,
    car: {
      name: 'BMW',
      red: 'red'
    }
  })

  const update = () => {
    // m1 --- reactive
    // 深度監視
    // m1.car.name += '=='

    // ------------------------------------

    // m2 --- shallowReactive
    // 淺監視,
    // m2.name += '=='
    // m2.car.name += '==' // not Working

    // ------------------------------------

    // m3 --- ref
    // 深層監視
    // m3.value.name += '==='
    // m3.value.car.name += '==='

    // ------------------------------------

    // m4 --- shallowRef (不太確定作用)
    // 沒有 proxy 代理, 所以都無法變化
    // m4.value.name += '==='
    // m4.value.car.name += '==='
    
  }
  
</script>