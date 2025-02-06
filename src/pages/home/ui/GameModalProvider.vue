<script setup lang="ts">
import { ref } from "vue";
import { useGames } from "@/entities/games/lib/use-games";
import { useModal } from "@/shared/lib/composables/use-modal";
import type { Game } from "@/shared/types";
import { Modal, Input } from "@/shared/ui";

type ArgType = number | undefined;

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
const handleGameModal = (arg: ArgType) => {openGameModal()};

defineSlots<{
  default: (props: { openGameModal: (arg: ArgType) => void }) => void;
}>();
</script>

<template>
  <Modal :open="show" @close="closeGameModal">
    <form @submit.prevent="updateGameInfo" class="flex flex-col gap-5">
      <span class="text-xl font-medium">Set game</span>
      <div class="flex flex-col gap-3">
        <Input> Game name </Input>
        <Input> Game name </Input>
        <Input> Release Year </Input>
        <Input> Rating </Input>
      </div>
    </form>
  </Modal>

  <slot :open-game-modal="(arg) => handleGameModal(arg)" />
</template>
