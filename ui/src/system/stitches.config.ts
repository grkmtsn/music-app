import { createStitches, defaultThemeMap } from "solid-stitches";

import { defaultThemeTokens } from "./tokens";
import { utils } from "./utils";

export const {
  theme: defaultTheme,
  styled,
  css,
  globalCss,
  config,
  createTheme,
  getCssText,
  keyframes,
} = createStitches({
  prefix: "music-app",
  themeMap: {
    ...defaultThemeMap,
  },
  theme: defaultThemeTokens,
  utils,
});
