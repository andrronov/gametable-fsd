import { useStorage } from "@vueuse/core";
import { ref } from "vue";
import { isDefined } from "@/shared/lib/utils";
import type { Game, ParamQuery, PerPage } from "@/shared/types";

export const useGames = () => {
  const games = useStorage("app-games", [] as Game[]);
  const count = useStorage("app-counter", 0);

  const addGame = (game: Game) => {
    games.value.push(game);
    count.value++;
  };
  const deleteGame = (id: number) => {
    games.value = games.value.filter((game) => game.id !== id);
  };
  const updateGame = (newGame: Game) => {
    games.value = games.value.map((game) =>
      game.id === newGame.id ? newGame : game,
    );
  };
  const deleteAll = () => (games.value = []);

  const gameHandle = (game: Game) => {
    if (isDefined(games.value.find((g) => g.id === game.id))) {
      updateGame(game);
    } else {
      addGame(game);
    }
  };

  // bad practice, i know :/
  const getGamesPerPage = (params: ParamQuery) => {
    const pageValue = params.page * params.perPage;
    return games.value.slice(pageValue - params.perPage, pageValue);
  };
  const possiblePages = (perPage: PerPage) => {
    return Math.ceil(games.value.length / perPage);
  };

  return {
    count,
    games,
    deleteGame,
    deleteAll,
    gameHandle,
    getGamesPerPage,
    possiblePages,
  };
};
