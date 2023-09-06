<script setup lang="ts">
import type { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <h1 class="text-3xl mb-2">Welcome to TypeRacer</h1>
    <h2>Increase your typing speed while racing against others!</h2>
  </header>

  <div class="flex flex-col content-center justify-items-center space-y-3">
    <RouterLink to="/join" class="btn">Join a Typing Race</RouterLink>
    <span class="italic">or</span>
    <RouterLink to="/create" class="btn">Create Racetrack</RouterLink>
  </div>
</template>
