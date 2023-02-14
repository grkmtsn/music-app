import type { Meta, StoryObj } from "@storybook/html";
import type { ParentProps } from "solid-js";

import { Text, TextProps } from "./index";

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    size: 1,
    bold: false,
  },
};

export default {
  title: "Text",
  render: (props) => <Text {...props}>Lorem Ipsum Dolor</Text>,
  argTypes: {
    size: { options: [1, 2, 3], control: { type: "select" } },
    bold: { control: { type: "boolean" } },
  },
} as Meta<ParentProps<typeof Text>>;
