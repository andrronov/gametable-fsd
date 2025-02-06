export type AppTheme = "dark" | "light";

export type ComponentSize = "xs" | "sm" | "md" | "lg";
export type ComponentStatus = "info" | "success" | "warning" | "error";
export type ComponentBrandColors = "primary" | "secondary" | "accent";
export type ComponentColor = ComponentBrandColors | "ghost" | ComponentStatus;

export type RangeTo<
  N extends number,
  A extends number[] = [1],
> = A["length"] extends N ? A[number] : RangeTo<N, [...A, A["length"]]>;

export type Platform = "PC" | "Console" | "Mobile";

export type Game = {
  id: number;
  name: string;
  platform: Platform;
  releaseYear: number;
  rating: RangeTo<11>;
};

export enum Keys {
    Space = " ",
    Enter = "Enter",
    Escape = "Escape",
    Backspace = "Backspace",
    ArrowLeft = "ArrowLeft",
    ArrowUp = "ArrowUp",
    ArrowRight = "ArrowRight",
    ArrowDown = "ArrowDown",
    Home = "Home",
    End = "End",
    PageUp = "PageUp",
    PageDown = "PageDown",
    Tab = "Tab",
  }