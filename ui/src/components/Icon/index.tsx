import {
  Component,
  JSX,
  mergeProps,
  ParentProps,
  Show,
  splitProps,
} from "solid-js";
import type * as Stitches from "solid-stitches";

import { styled } from "../../system/stitches.config";

export type IconProps = JSX.HTMLAttributes<SVGElement> & Stitches.CSS;

const StyledIcon = styled("svg", {});

const fallbackIcon = {
  viewBox: "0 0 24 24",
  path: () => (
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
};

export const Icon: Component<ParentProps<IconProps>> = (props) => {
  const defaultProps: IconProps = {
    viewBox: fallbackIcon.viewBox,
  };

  const propsWithDefault: IconProps = mergeProps(defaultProps, props);

  const [local, rest] = splitProps(propsWithDefault, ["children", "viewBox"]);

  return (
    <StyledIcon viewBox={local.viewBox as string} {...rest}>
      <Show when={local.children} fallback={fallbackIcon.path}>
        {local.children}
      </Show>
    </StyledIcon>
  );
};
