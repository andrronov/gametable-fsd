<script setup lang="ts">
import { objectEntries } from "@vueuse/core";
import { computed, onBeforeUnmount, ref } from "vue";
import { useGames } from "@/entities/games/lib/use-games";
import { useModal } from "@/shared/lib/composables/use-modal";
import { isDefined, getCurrentYear } from "@/shared/lib/utils";
import type { Game } from "@/shared/types";
import { SUPPORTED_PLATFORMS } from "@/shared/types";
import { Modal, Input, Select, Range, Button } from "@/shared/ui";

type ArgType = Game | undefined;

defineSlots<{
  default: (props: { openGameModal: (arg?: ArgType) => void }) => void;
}>();

const { open: openGameModal, close: closeGameModal, show } = useModal();

const { count, gameHandle, deleteGame } = useGames();

const getDefaultGame = (): Game => ({
  id: count.value,
  name: "New game",
  platform: "PC",
  rating: 0,
  releaseYear: getCurrentYear(),
});

const gameData = ref<Game>(getDefaultGame());

const isValidGame = computed(() => {
  const validateString = (value: string) => value.length > 0;
  const validateYear = (value: number) => {
    return value >= 1900 ? value <= getCurrentYear() : false;
  };

  const checkValues = {
    id: isDefined,
    name: validateString,
    platform: isDefined,
    releaseYear: validateYear,
    rating: isDefined,
  };

  const validRatio = objectEntries(gameData.value).reduce((acc, [key, val]) => {
    const validator = checkValues[key];
    if (isDefined(validator)) {
      // @ts-ignore
      return acc + (validator(val) ? 1 : 0);
    }
    return acc;
  }, 0);
  return validRatio === Object.keys(gameData.value).length;
});

const handleGameModal = (arg: ArgType) => {
  if (isDefined(arg)) {
    gameData.value = Object.assign({}, arg);
  } else {
    gameData.value = getDefaultGame();
  }

  openGameModal();
};

const updateGame = () => {
  if (isValidGame.value) {
    gameHandle(gameData.value);
    closeGameModal();
  }
};
const removeGame = () => {
  const userConfirm = confirm("You sure?");

  if (userConfirm) {
    deleteGame(gameData.value.id);
    closeGameModal();
  }
};
</script>

<template>
  <Modal :open="show" @close="closeGameModal()">
    <form @submit.prevent="updateGame()" class="flex flex-col gap-5">
      <span class="text-xl font-medium">Set game</span>
      <div class="flex flex-col gap-3">
        <Input v-model="gameData.name"> Game name </Input>
        <Select
          v-model="gameData.platform"
          :options="Array.from(SUPPORTED_PLATFORMS)"
          >Platform</Select
        >
        <Input v-model="gameData.releaseYear"> Release Year </Input>
        <Range v-model="gameData.rating" :min="0" :max="10" :step="0.1"
          >Rating</Range
        >
      </div>
      <div class="flex flex-col gap-2">
        <Button :disabled="!isValidGame" type="submit"> Done </Button>
        <Button color="error" size="sm" @click="removeGame"> Delete </Button>
      </div>
    </form>
  </Modal>

  <slot :open-game-modal="(arg) => handleGameModal(arg)" />
</template>
