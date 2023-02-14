import { JSX } from "solid-js";

import { Icon, IconProps } from "./index";

interface CreateIconOptions {
  viewBox?: string;
  path: () => JSX.Element | JSX.Element[];
}

export function createIcon(options: CreateIconOptions) {
  const { viewBox = "0 0 24 24" } = options;

  const IconComponent = (props: IconProps) => {
    return (
      <Icon viewBox={viewBox} {...props}>
        {options.path}
      </Icon>
    );
  };

  return IconComponent;
}
