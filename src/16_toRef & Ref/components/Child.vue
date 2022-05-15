<template>
  <h2>Child 子層組件</h2>
  <h3>age: {{ age }}</h3>
  <h3>length: {{ length }}</h3>
  <h3>length2: {{ length2 }}</h3>
</template>

<script setup lang="ts">
import { computed, Ref, toRef } from '@vue/reactivity';


  const props = defineProps({
    age: {
      type: Number,
      required: true
    }
  })

  // ===================================================

  function useGetLength(age: Ref) {
    return computed(() => {
      return age.value.toString().length
    })
  }

  // const length = useGetLength(toRef(props, 'age'))
  
  // ===================================================

  const length = computed(() => {
    return toRef(props, 'age').value.toString().length
  })

  // ===================================================

  const length2 = computed(() => {
    return props.age.toString().length
  }) 


</script>