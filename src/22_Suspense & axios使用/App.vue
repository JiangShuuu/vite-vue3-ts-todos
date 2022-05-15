<template>
  <h2>App父層組件：Suspense使用</h2>  
  <hr>
  <Suspense>
    <template #default>
      <!-- 非同步組件 -->
      <AsyncComponent />
    </template>
    <template v-slot:fallback>
      <!-- loading內容 -->
      <h2>Loading</h2>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
// Vue2 動態引入組件, Vue3不適用
// const AsyncComponent = () => import('./components/Child.vue')

// Vue3 動態引入組件
// import { defineAsyncComponent } from 'vue';
// const AsyncComponent = defineAsyncComponent(() => import('./components/Child.vue'))

// 靜態引入組件
import AsyncComponent from './components/Child.vue'


</script>