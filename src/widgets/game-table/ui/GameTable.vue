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
  <table v-else>
    <tr>
      <th>Name</th>
      <th>Platform</th>
      <th>Release</th>
      <th>Rating</th>
    </tr>
    <tr
      v-for="game in games"
      :key="game.id"
      @click="emit('get-game-info', game)"
    >
      <td>{{ game.name }}</td>
      <td>{{ game.platform }}</td>
      <td>{{ game.releaseYear }}</td>
      <td>{{ game.rating }}</td>
    </tr>
  </table>
</template>
