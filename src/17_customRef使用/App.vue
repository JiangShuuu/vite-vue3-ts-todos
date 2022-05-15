
<template>
  <h2>customRef使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>

<script setup lang="ts">
  import { customRef, ref } from 'vue'

  // const keyword = ref('abc')
  
  function useDebouncedRef<T>(value: T, delay= 200) {
    // 準備一個定時器變數
    let timeOutId: number
    return customRef((track, trigger) => {
      return {
        get() {
          track()
          return value
        },
        set(newValue: T) {
          // 解除定時器
          clearTimeout(timeOutId)
          // 開始定時器
          timeOutId = setTimeout(() => {
            value = newValue
            // 告訴Vue更新介面
            trigger()
          }, delay)
        }
      }
    })
  }

  const keyword = useDebouncedRef('abcc', 500)


</script>