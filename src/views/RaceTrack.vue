<script setup lang="ts">
import BackButton from '@/components/buttons/BackButton.vue';
import { faker } from '@faker-js/faker';

const raceSentence = faker.hacker.phrase().concat('. ').concat(faker.hacker.phrase());
</script>

<template>
  <BackButton to="/" />

  <div class="p-4">
    <p>Entered race with code: {{ $route.params.code }}</p>
    <div class="mt-5 p-5 outline outline-1 dark:outline-white outline-slate-900 rounded-md">
      {{ raceSentence }}
    </div>
    <input placeholder="Enter above text here" type="text" aria-label="Text input"
      class="mt-4 w-full py-1.5 px-3 rounded-sm text-slate-900 outline outline-1 outline-slate-500"
      :maxlength="raceSentence.length" />
  </div>
</template>