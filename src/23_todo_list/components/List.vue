<template>
  <ul class="my-4">
    <Item v-for="(todo, index) in lists" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :index="+index" :updateTodo="updateTodo"/>
  </ul>
</template>

<script setup lang="ts">
import Item from './item.vue'


defineProps({
  lists: {
    type: Object,
    required: true
  },
  deleteTodo: {
    type: Function,
    required: true
  },
  updateTodo: {
    type: Function,
    required: true
  }
})

</script>