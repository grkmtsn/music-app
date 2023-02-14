import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Heading, HeadingProps } from "./index";

type Story = StoryObj<HeadingProps>;

export const Default: Story = {
  args: {
    size: 3,
  },
};

export default {
  title: "Heading",
  render: (props) => (
    <Heading {...props} css={{ fontWeight: "$bold", color: "$red" }}>
      Lorem Ipsum Dolor
    </Heading>
  ),
  argTypes: {
    size: { options: [1, 2, 3, 4], control: { type: "select" } },
  },
} as Meta<ComponentProps<typeof Heading>>;
