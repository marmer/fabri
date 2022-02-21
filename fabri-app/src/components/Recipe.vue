<template>
  <div class="hello">
    <h1 class="bg-gradient-to-b from-blue-100">{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  msg: String
})

</script>
