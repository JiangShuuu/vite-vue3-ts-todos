<template>
  <h2>reatice 和 ref 細節問題</h2>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <hr>
  <button @click="update">更新數據</button>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
  // ref 處理基本數據
  const m1 = ref('abc')

  // 處理響應式數據
  const m2 = reactive({
    name: '小明',
    wife: {
      name: '小紅'
    }
  })

  const m3 = ref({
    name: '小明',
    wife: {
      name: '小紅'
    }
  })

  const update = () => {
    // ref如果放入物件, 那會自動經過reactive的處理, 行程proxy類型的物件
    console.log(m3)
    m1.value += '==='
    m2.wife.name += '==='
    // m3.value.name += '==='
    m3.value.wife.name += '==='
  }
</script>