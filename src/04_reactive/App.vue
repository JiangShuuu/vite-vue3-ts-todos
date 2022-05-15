<template>
  <h2>reactive</h2>
  <h3>名字: {{user.name}}</h3>
  <h3>年齡: {{user.age}}</h3>
  <h3>性別: {{user.gender}}</h3>
  <h3>老婆: {{user.wife}}</h3>
  <hr>
  <button @click="updateUser">更新數據</button>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'

  // 顯示user相關訊息, 點擊按鈕可以更新相關訊息

  // 將數據變成響應式數據
  const obj = {
    name: '小明',
    age: 20,
    wife: {
      name: '小甜甜',
      age: 18,
      cars: ['BMW', '奧迪', 'toyata']
    }
  }
  // 輸出的是 Proxy 的代理對象, 被代理的對象就是名叫 user 的物件
  // 若不加 reactive 則無法實踐響應式更新, 即需要 Proxy 代理實現'深層轉換'
  const user = reactive<any>(obj)
  console.log(user)

  // 方法
  // function updateUser() {}
  const updateUser = () => {
    //// obj.name += '==' 無法即時更新

    /*
    user.name += '=='
    user.age +=2
    user.wife.name += '++'
    user.wife.cars[2] = '瑪莎拉蒂'
    */

    // obj 增加新的屬性, 需用ts方式在原物件:any
    // obj.gender = '男' // 此方式無法即時更新

    // reactive user 增加新的屬性, 需用ts方式在原物件:any 或者 reactive<any>
    // 此方式可以即時更新
    user.gender = '男' 

    // 如果操作 Proxy 對象, 目標對象數據也會跟著變化, 畫面也會重新渲染
    delete user.age

    // 透過代理對象更改目標對像屬性
    user.wife.cars[1] = '瑪莎拉蒂'

    // 透過代理對象增加目標對象屬性
    user.wife.cars[3] = '大黃蜂'
    console.log(user)
  }
</script>

<style>

</style>