<template>
  <ul class="my-4">
    <Item v-for="(todo, index) in state.todos" :key="todo.id" :todo="todo"  :index="index" />
  </ul>
</template>

<script setup lang="ts">
import Item from './item.vue'
import { useCounterStore } from '../stores/counter'

const state = useCounterStore()

</script>