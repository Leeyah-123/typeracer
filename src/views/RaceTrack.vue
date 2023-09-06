<script setup lang="ts">
import BackButton from '@/components/buttons/BackButton.vue';
</script>

<template>
  <BackButton to="/" />

  <p>Entered race with code: {{ $route.params.code }}</p>
</template>