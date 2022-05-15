<template>
  <h2>自訂hook函數操作</h2>
  <h2>x:{{x}}, y:{{y}}</h2>
  <h3 v-if="loading">正在載入中...</h3>
  <h3 v-else-if="errorMsg">錯誤訊息:{{errorMsg}}</h3>
  <ul v-else>
    <li>id: {{ data.id }}</li>
    <li>address: {{ data.title }}</li>
    <li>distance: {{ data.distance }}</li>
  </ul>
  <hr>
  <ul v-for="item in data" :key="item.id">
    <li>id: {{ item.id }}</li>
    <li>address: {{ item.title }}</li>
    <li>price: {{ item.price }}</li>
  </ul>
</template>

<script setup lang="ts">
  import { watch } from 'vue';
  import useMousePosition from './hooks/useMousePosition'
  import useRequest from './hooks/useRequest'

  const {x, y} = useMousePosition()

  interface AddressData {
    id: number,
    title: string,
    distance: string
  }

  interface ProductData {
    id: string,
    title: string,
    price: number
  }

  // const { loading, data, errorMsg } = useRequest<AddressData>('/data/address.json')
  const { loading, data, errorMsg } = useRequest<ProductData[]>('/data/products.json')

  watch(data, () => {
    if(data.value) {
      console.log(data.value.length)
    }
  })
</script>