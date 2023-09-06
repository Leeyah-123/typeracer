<script setup lang="ts">
import { ref } from "vue";
import BackButton from "../components/buttons/BackButton.vue";

const raceCode = ref("");
const error = ref("");

const joinRace = () => {
  if (!validateInput()) return;
  error.value = "Race track does not exist"
}

const validateInput = () => {
  error.value = "";

  if (!raceCode.value) {
    error.value = "Please enter race code";
    return false;
  }

  return true;
}

</script>

<template>
  <BackButton to="/" />

  <div>
    <h1 class="text-3xl mb-2">Join race</h1>
    <h2>Join an already created racetrack</h2>
  </div>
  <form class="h-full flex gap-2 px-1">
    <div>
      <input placeholder="Enter race code" v-model="raceCode" :onFocusout="validateInput" :onInput="validateInput"
        type="text" id="code" class="w-56 h-12 px-5 rounded-lg text-slate-950 outline outline-1"
        :class="error ? 'outline-red-500' : 'outline-slate-900'" />
      <p v-if="error" class="ml-2 mt-1 text-start text-xs text-red-500">{{ error }}</p>
    </div>

    <button class="btn" @click.prevent="joinRace">Join</button>
  </form>
</template>

<style scoped></style>