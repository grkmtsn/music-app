import type { ParentProps } from "solid-js";

import { css } from "../../system/stitches.config";

export type ButtonProps = {
  variant: "red" | "black";
};

const classes = css({
  padding: "$3",
  borderRadius: "$1",
  variants: {
    color: {
      red: {
        backgroundColor: "$red",
        color: "$white",
      },
      black: {
        backgroundColor: "$black",
        color: "$white",
      },
    },
  },
});

export const Button = (props: ParentProps<ButtonProps>) => {
  return (
    <button class={classes({ color: props.variant })}>{props.children}</button>
  );
};
