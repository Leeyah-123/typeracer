<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
  to: string,
}>()
</script>

<template>
  <RouterLink :to="to" class="fixed px-3 py-1.5 mx-2 my-3 top-2 left-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
      <title>arrow-left</title>
      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
        class="fill-slate-700 dark:fill-slate-50" />
    </svg>
  </RouterLink>
</template>

<style scoped></style>