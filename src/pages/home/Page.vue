<script setup lang="ts">
import { useSeoMeta } from "@unhead/vue";
import { useRouteQuery } from "@vueuse/router";
import { ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GameTable } from "@/widgets/game-table";
import { Pagination } from "@/features/pagination";
import { useGames } from "@/entities/games/lib/use-games";
import { configurePageTitle } from "@/shared/lib/utils";
import type { Game, ParamQuery, PerPage } from "@/shared/types";
import { Button, Input } from "@/shared/ui";
import GameModalProvider from "./ui/GameModalProvider.vue";

useSeoMeta({
  title: () => configurePageTitle("Home"),
});

const { games, deleteAll, possiblePages, getGamesPerPage } = useGames();

const gameList = ref<Game[]>(Array.from(games.value));

const deleteGames = () => {
  const userConfirm = confirm("You sure?");

  if (userConfirm) {
    deleteAll();
  }
};

const defaultParams: ParamQuery = {
  page: 1,
  perPage: 10,
};

const pageQuery = useRouteQuery("page", defaultParams.page, {
  transform: Number,
});
const perPageQuery = useRouteQuery<PerPage>("perPage", defaultParams.perPage);

watchEffect(() => {
  gameList.value = getGamesPerPage({
    page: pageQuery.value,
    perPage: perPageQuery.value,
  });
});
</script>

<template>
  <GameModalProvider v-slot="{ openGameModal }">
    <div class="w-full flex-col flex justify-between items-center gap-2">
      <Button
        color="secondary"
        size="lg"
        @click="openGameModal()"
        class="w-full"
      >
        Add game
      </Button>
      <Button
        v-if="games.length > 0"
        class="w-full"
        @click="deleteGames()"
        color="error"
      >
        Delete All
      </Button>
    </div>
    <GameTable
      :games="gameList"
      @get-game-info="(game) => openGameModal(game)"
      class="mt-8"
    />
  </GameModalProvider>
  <Pagination
    :pages="possiblePages(perPageQuery)"
    :current="pageQuery"
    :per-page="perPageQuery"
    class="mt-4"
    @select-per-page="(val) => (perPageQuery = val)"
    @select-page="(page) => (pageQuery = page)"
  />
</template>
