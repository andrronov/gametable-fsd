<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue";
import { GameTable } from "@/widgets/game-table";
import { useGames } from "@/entities/games/lib/use-games";
import { configurePageTitle } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import GameModalProvider from "./ui/GameModalProvider.vue";

useSeoMeta({
  title: () => configurePageTitle("Home"),
});

const { games } = useGames();
</script>

<template>
  <GameModalProvider v-slot="{ openGameModal }">
    <Button :color="'secondary'" :size="'lg'" @click="openGameModal()">
      Add game
    </Button>
    <GameTable :games @get-game-info="(game) => openGameModal(game)" />
  </GameModalProvider>
</template>
