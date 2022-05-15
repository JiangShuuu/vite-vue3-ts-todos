<template>
  <h2>App 子層組件</h2>
  <h3>msg: {{ msg }}</h3>
  <h3>msg2: {{ msg2 }}</h3>
  <button @click="emitXXX">emit事件</button>
</template>

<!-- <script lang="ts">
  
  import { defineComponent, ref } from 'vue'

  export default defineComponent ({
    name: 'Child',
    props: ['msg'],

    setup(props, context) {
      // props參數, 是一個對象, 有父層傳遞的數據, 並且可以使用
      console.log(props.msg)
      // context參數, 是一個對象, 有attrs(獲取父層組建傳入的所有標籤屬性), emit(分發事件), slots(插槽)
      console.log(context)
      console.log(context.attrs)
      console.log(context.emit)
      console.log(context.attrs.msg2)

      const showMsg1 = () => {
        console.log('setup中的showMsg1方法')
      }

      // emit事件
      function emitXXX() {
        context.emit('xxx', '+++')
      }
      return {
        emitXXX
      }
    }
  })
</script> -->

<script setup lang="ts">

  const props = defineProps({
    msg: String,
    msg2: String
  })
  
  const emit = defineEmits(['xxx'])

  function emitXXX() {
    emit('xxx', '+++')
  }

</script>