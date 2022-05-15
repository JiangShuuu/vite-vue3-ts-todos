<template>
  <h2>Async component子層組件</h2>
  <h3>{{ data }}</h3>
  <h3>{{ data2 }}</h3>
</template>

<script setup lang="ts">
import axios from 'axios'

const data = await axios.get('/data/address.json').then((res) => {
  return res.data
})

const data2 = 'hihi'

  

</script>

<style>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>