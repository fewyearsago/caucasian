import { PAGES } from "@/config/pages.config";

export interface IMenuItem {
  href: string;
  name: string;
}

export const MENU = [
  { href: PAGES.HOME, name: "Рецепты" },
  { href: PAGES.INGREDIENTS, name: "Ингридиенты" },
  { href: PAGES.ABOUT, name: "О нас" },
];
