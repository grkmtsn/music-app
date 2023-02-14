import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button, ButtonProps } from "./index";

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: "red",
  },
};

export default {
  title: "Button",
  render: (props) => <Button {...props}>Click</Button>,
  argTypes: {
    variant: { options: ["black", "red"], control: { type: "radio" } },
  },
} as Meta<ComponentProps<typeof Button>>;
