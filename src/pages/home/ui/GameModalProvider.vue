<script setup lang="ts">
import { ref } from "vue";
import { useGames } from "@/entities/games/lib/use-games";
import { useModal } from "@/shared/lib/composables/use-modal";
import { isDefined } from "@/shared/lib/utils";
import type { Game } from "@/shared/types";
import { SUPPORTED_PLATFORMS } from "@/shared/types";
import { Modal, Input, Select, Range } from "@/shared/ui";

type ArgType = Game | undefined;

const { open: openGameModal, close: closeGameModal, show } = useModal();

const { count } = useGames();

const getDefaultGame = (): Game => ({
  id: 0,
  name: "",
  platform: "PC",
  rating: 1,
  releaseYear: 0,
});

const gameData = ref<Game>(getDefaultGame());

const updateGameInfo = () => {};
const handleGameModal = (arg: ArgType) => {
  if (isDefined(arg)) {
    gameData.value = arg;
  }

  openGameModal();
};

defineSlots<{
  default: (props: { openGameModal: (arg: ArgType) => void }) => void;
}>();
</script>

<template>
  <Modal :open="show" @close="closeGameModal">
    <form @submit.prevent="updateGameInfo" class="flex flex-col gap-5">
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
    </form>
  </Modal>

  <slot :open-game-modal="(arg) => handleGameModal(arg)" />
</template>
