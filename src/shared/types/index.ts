export type AppTheme = "dark" | "light";

export type ComponentSize = "xs" | "sm" | "md" | "lg";
export type ComponentStatus = "info" | "success" | "warning" | "error";
export type ComponentBrandColors = "primary" | "secondary" | "accent";
export type ComponentColor = ComponentBrandColors | "ghost" | ComponentStatus;

export type RangeTo<
  N extends number,
  A extends number[] = [0],
> = A["length"] extends N ? A[number] : RangeTo<N, [...A, A["length"]]>;

export const SUPPORTED_PLATFORMS = ["PC", "Console", "Mobile"] as const;
export type Platform = (typeof SUPPORTED_PLATFORMS)[number];

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

export const PER_PAGE = [5, 10, 15, 20] as const;
export type PerPage = (typeof PER_PAGE)[number];

export type ParamQuery = {
  page: number;
  perPage: PerPage;
};
