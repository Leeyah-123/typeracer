<script setup lang="ts">
import { nanoid } from "nanoid";
import { Confirm } from "notiflix";
import { ref } from "vue";
import { useRouter } from "vue-router";
import BackButton from "../components/buttons/BackButton.vue";
import { useSocket } from "../stores/socket";

const code = ref("MJYUHW");
const { push } = useRouter();

const { joinRaceTrack } = useSocket();

const joinRace = () => {
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

const copyCodeToClipboard = () => {
  navigator.clipboard.writeText(code.value);
  alert("Code copied to clipboard");
}
</script>

<template>
  <BackButton to="/" />

  <div>
    <h1 class="text-3xl mb-2">Create racetrack</h1>
    <h2>Create a new racetrack to race with others</h2>
  </div>
  <div class="h-full flex gap-2 px-1">
    <div
      class="outline outline-1 dark:outline-white outline-slate-900 w-56 h-12 p-8 rounded-lg relative text-start flex place-items-center">
      <button class="h-5 w-5 absolute right-2 top-2 cursor-pointer" @click="copyCodeToClipboard">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Copy code to clipboard</title>
          <path
            d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
            class="fill-slate-900 dark:fill-slate-50" />
        </svg>
      </button>
      <span class="text-xl ml-3">{{ code }}</span>
    </div>

    <button class="btn mt-2" @click.prevent="joinRace">Join</button>
  </div>
</template>
