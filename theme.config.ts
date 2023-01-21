import { ThemeConfig } from "types/ThemeConfig";
import {darkTheme} from "theme/default";
import merge from "lodash.merge";

export const theme: ThemeConfig = merge(darkTheme, {
  styles: {
    fonts: {
      heading: "Roboto",
    },
  },
  nav: {
    primary: [
      { label: "DAO", href: "/vote" },
    ],
    secondary: [],
  },
} as Partial<ThemeConfig>);
