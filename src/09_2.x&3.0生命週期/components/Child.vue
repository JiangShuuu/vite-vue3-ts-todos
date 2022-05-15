<template>
  <h2>Child子層組件</h2>
  <h4>msg: {{msg}}</h4>
  <button @click="update">更新數據</button>
  <h3>由此可知3.0的生命週期都比2.0的快</h3>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent ({
    name: 'Child',

    beforeCreate() {
      console.log('2.x beforeCreate')
    },
    create() {
      console.log('2.x create')
    },
    beforeMount() {
      console.log('2.x beforeMount')
    },
    mount() {
      console.log('2.x mount')
    },
    beforeUpdate() {
      console.log('2.x mount')
    },
    updated() {
      console.log('2.x update')
    },
    beforeUnmount() {
      console.log('2.x beforeDestroy')
    },
    unmounted() {
      console.log('2.x destroy')
    }
  })
</script>

<script setup lang="ts">
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
  
  const msg = ref('abc')

  // 按鈕點擊事件
  const update = () => {
    msg.value += '==='
  }

  onBeforeMount(() => {
    console.log('3.0 onBforeMount')
  })
  onMounted(() => {
    console.log('3.0 onMounted')
  })
  onBeforeUpdate(() => {
    console.log('3.0 onBeforeUpdate')
  })
  onUpdated(() => {
    console.log('3.0 onUpdated')
  })
  onBeforeUnmount(() => {
    console.log('3.0 onBeforeUnmount')
  })
  onUnmounted(() => {
    console.log('3.0 onUnmounted')
  })
</script>