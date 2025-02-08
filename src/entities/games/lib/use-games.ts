import { useStorage } from "@vueuse/core";
import { isDefined } from "@/shared/lib/utils";
import type { Game } from "@/shared/types";

export const useGames = () => {
  const games = useStorage("app-games", [] as Game[]);
  let count = 0;

  const addGame = (game: Game) => {
    games.value.push(game);
    count++;
  };
  const deleteGame = (id: number) => {
    games.value = games.value.filter((game) => game.id !== id);
  };
  const updateGame = (newGame: Game) => {
    games.value = games.value.map((game) =>
      game.id === newGame.id ? newGame : game,
    );
  };

  const gameHandle = (game: Game) => {
    if (isDefined(games.value.find((g) => g.id === game.id))) {
      updateGame(game);
    } else {
      addGame(game);
    }
  };

  return {
    games,
    deleteGame,
    gameHandle,
    count,
  };
};
