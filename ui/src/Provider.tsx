import { onMount, ParentProps } from "solid-js";

import { globalResetStyles } from "./system/css-reset";
import { createTheme } from "./system/stitches.config";
import { defaultThemeTokens } from "./system/tokens";

export type StitchesThemeConfig = {
  [Scale in keyof typeof defaultThemeTokens]?: {
    [Token in keyof (typeof defaultThemeTokens)[Scale]]?:
      | boolean
      | number
      | string;
  };
} & {
  [Scale in keyof typeof defaultThemeTokens]?: {
    [Token in string]: boolean | number | string;
  };
} & {
  [Scale in string]: {
    [Token in string]: boolean | number | string;
  };
};

export type ProviderProps = {
  enableCssReset?: boolean;
  config?: StitchesThemeConfig;
};

const html = document.documentElement;

export const UIProvider = (props: ParentProps<ProviderProps>) => {
  const enableCssReset = () => props.enableCssReset || false;

  onMount(() => {
    if (props.config) {
      const customTheme = createTheme(props.config);
      html.classList.add(customTheme.className);
    }
  });

  if (enableCssReset()) {
    globalResetStyles();
  }

  return <div>{props.children}</div>;
};
