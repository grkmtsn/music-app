import type { Component, ParentProps } from "solid-js";
import { JSX, splitProps } from "solid-js";
import type * as Stitches from "solid-stitches";

import { styled } from "../../../system/stitches.config";

export type TextProps = {
  size?: 1 | 2 | 3;
  bold?: boolean;
} & JSX.HTMLAttributes<HTMLParagraphElement> &
  Stitches.CSS;

const StyledText = styled("p", {
  variants: {
    size: {
      1: {
        fontSize: "$base",
        lineHeight: "$taller",
      },
      2: {
        fontSize: "$sm",
        lineHeight: "$tall",
      },
      3: {
        fontSize: "$xs",
        lineHeight: "$base",
      },
    },
    bold: {
      true: {
        fontWeight: "$bold",
      },
    },
  },
});

export const Text: Component<ParentProps<TextProps>> = (props) => {
  const [local, rest] = splitProps(props, ["children"]);

  return <StyledText {...rest}>{local.children}</StyledText>;
};
