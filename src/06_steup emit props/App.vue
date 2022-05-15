<template>
  <h2>App 父層組件</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="msg += '===='"> 更新數據 </button>
  <hr> 
  <Child :msg='msg' msg2="真棒" @xxx="xxx"/>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Child from './components/Child.vue' 

  const msg = ref('what are you')

  function xxx(txt: string) {
    msg.value += txt
  }

</script>