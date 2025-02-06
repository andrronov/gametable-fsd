import { useStorage } from "@vueuse/core";
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

  return {
    games,
    addGame,
    deleteGame,
    count,
  };
};
