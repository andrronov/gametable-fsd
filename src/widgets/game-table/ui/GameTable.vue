<script setup lang="ts">
import type { Game } from "@/shared/types";

defineProps<{
  games: Game[];
}>();

const emit = defineEmits<{
  "get-game-info": [game: Game];
}>();
</script>

<template>
  <template v-if="!games.length">
    <div
      class="w-full h-20 flex items-center my-3 justify-center bg-transparent border-2 border-secondary rounded-xl"
    >
      <p class="text-secondary text-2xl font-semibold">There's no games yet</p>
    </div>
  </template>
  <table
    v-else
    class="min-w-full bg-base-100 border-2 border-base-200 rounded-lg text-base-content"
  >
    <thead>
      <tr class="bg-base-100 border-b">
        <th class="py-2 px-4 text-left w-1/3">Name</th>
        <th class="py-2 px-4 text-left">Platform</th>
        <th class="py-2 px-4 text-left">Release</th>
        <th class="py-2 px-4 text-left">Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="game in games"
        :key="game.id"
        @click="emit('get-game-info', game)"
        class="border-b hover:bg-base-300 cursor-pointer"
      >
        <td class="py-2 px-4 w-1/3">{{ game.name }}</td>
        <td class="py-2 px-4">{{ game.platform }}</td>
        <td class="py-2 px-4">{{ game.releaseYear }}</td>
        <td class="py-2 px-4">{{ game.rating }}</td>
      </tr>
    </tbody>
  </table>
</template>
