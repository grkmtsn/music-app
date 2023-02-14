import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Spinner } from "./index";

type Story = StoryObj<{}>;

export const Default: Story = {
  args: {},
};

export default {
  title: "Spinner",
  render: (props) => <Spinner {...props} />,
  argTypes: {},
} as Meta<ComponentProps<typeof Spinner>>;
