
<template>
  <h2>toRaw 和 markRaw</h2>
  <h3>state: {{ state }}</h3>
  <hr>
  <button @click="testToRaw">測試toRaw</button>
  <button @click="testMarkRaw">測試markRaw</button>
</template>

<script setup lang="ts">
import { markRaw, reactive, toRaw } from 'vue';

interface UserInfo {
  name: string
  age: number
  likes?: string[]
}
  
  const state = reactive<UserInfo>({
    name: '小明',
    age: 20
  })

  const testToRaw = () => {
    // 把 proxy 目標變成一般目標, 數據變化, 介面不變
    const user = toRaw(state)
    user.name += '=='
    console.log('我很好騙')
  }

  const testMarkRaw = () => {
    // state.likes = ['吃', '喝']
    // state.likes[0] += '牛排'
    // console.log(state)

    const likes = ['吃', '喝']
    
    // markRaw標記的目標數據, 從此後都不能被 proxy 代理 
    state.likes = markRaw(likes)
    setInterval(() => {
      if(state.likes) {
        state.likes[0] += '豬'
        console.log('定時器啟動')
      }
    }, 1000)
  }

</script>