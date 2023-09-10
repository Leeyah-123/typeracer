<script setup lang="ts">
import { useSocket } from "@/stores/socket";
import { nanoid } from "nanoid";
import { Confirm } from "notiflix";
import { ref } from "vue";
import { useRouter } from "vue-router";

import BackButton from "../components/buttons/BackButton.vue";
const { push } = useRouter();

const { joinRaceTrack } = useSocket();

const code = ref("");
const error = ref("");

const joinRace = () => {
  if (!validateInput()) return;

  let name: string = nanoid(10);

  Confirm.prompt(
    "What's your username",
    'If no username is entered, a random username will be used',
    name,
    'Okay',
    'Cancel',
    (clientAnswer) => {
      if (clientAnswer) name = clientAnswer;
      if (!joinRaceTrack(code.value, name)) return;
      push(`/race/${code.value}`);
    },
  );
}

const validateInput = () => {
  error.value = "";

  if (!code.value) {
    error.value = "Please enter race code";
    return false;
  } else if (code.value.length < 6) {
    error.value = "Invalid race code"
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
      <input placeholder="Enter race code" v-model="code" :onFocusout="validateInput" :onInput="validateInput" type="text"
        id="code" class="w-56 h-12 px-5 rounded-lg text-slate-950 outline outline-1"
        :class="error ? 'outline-red-500' : 'outline-slate-900'" />
      <p v-if="error" class="ml-2 mt-1 text-start text-xs text-red-500">{{ error }}</p>
    </div>

    <button class="btn" @click.prevent="joinRace">Join</button>
  </form>
</template>
