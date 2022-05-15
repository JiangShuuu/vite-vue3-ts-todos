<template>
  <h3>Child 子層組件</h3>
  <button @click="modalOpen = true">打開一個對話框</button>

  <!-- 對話框代碼 -->
  <Teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        這是對話框
      </div>
      <button @click="modalOpen = false">關閉對話框</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const modalOpen = ref(false)

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