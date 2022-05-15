
<template>
  <h2>響應式數據判斷</h2>
  
</template>

<script setup lang="ts">
  import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from 'vue'

  console.log('判斷是否為ref', isRef(ref({})))
  console.log('判斷是否為reactive', isReactive(reactive({})))
  console.log('判斷是否為readonly', isReadonly(readonly({})))
  console.log('判斷是否為proxy', isProxy(readonly({})))
  console.log('判斷是否為proxy', isProxy(reactive({})))
</script>