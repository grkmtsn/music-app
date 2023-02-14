/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Component, ParentProps } from "solid-js";
import { JSX, splitProps } from "solid-js";
import type * as Stitches from "solid-stitches";

import { styled } from "../../../system/stitches.config";
import { fontWeights } from "../../../system/tokens/typos";

export type HeadingProps = {
  size?: 1 | 2 | 3 | 4;
  weight?: keyof typeof fontWeights;
} & JSX.HTMLAttributes<HTMLHeadingElement> &
  Stitches.CSS;

const componentMap = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

const StyledHeading = styled("h3", {
  variants: {
    size: {
      1: {
        fontSize: "$xxl",
        lineHeight: "$none",
      },
      2: {
        fontSize: "$xl",
        lineHeight: "$taller",
      },
      3: {
        fontSize: "$lg",
        lineHeight: "$tall",
      },
      4: {
        fontSize: "$md",
        lineHeight: "$tall",
      },
    },
  },
});

export const Heading: Component<ParentProps<HeadingProps>> = (props) => {
  const [local, rest] = splitProps(props, ["children"]);

  return (
    // @ts-ignore
    <StyledHeading {...rest} as={componentMap[props.size || 3]}>
      {local.children}
    </StyledHeading>
  );
};
