import type { StoryObj } from "@storybook/html";

import { createIcon } from "./createIcon";
import { IconProps } from "./index";

type Story = StoryObj<IconProps>;

export const Default: Story = {
  args: {},
};

const IconAlbum = createIcon({
  viewBox: "0 0 13 16",
  path: () => (
    <path
      opacity="0.5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.2871 15.9866H6.01414C5.64426 15.9866 5.34441 15.6868 5.34441 15.3169C5.34441 14.947 5.64426 14.6471 6.01414 14.6471H10.2871C10.5175 14.6472 10.7053 14.4623 10.709 14.2319V6.52323C10.7088 6.41303 10.6656 6.30726 10.5884 6.22855L8.50556 4.14567C8.42725 4.06793 8.32122 4.02455 8.21088 4.02512H4.43357C4.20316 4.02877 4.0183 4.21661 4.01833 4.44705V15.3303C4.01833 15.7001 3.71848 16 3.34859 16C2.97871 16 2.67886 15.7001 2.67886 15.3303V4.44705C2.68255 3.47687 3.47008 2.69233 4.44026 2.69234H8.21758C8.68507 2.69075 9.13371 2.87648 9.46328 3.20804L11.5462 5.29092C11.8758 5.62175 12.0612 6.06958 12.0619 6.53663V14.2453C12.0508 15.2155 11.2573 15.994 10.2871 15.9866ZM1.33278 12.6379V1.75471C1.33643 1.5243 1.52427 1.33944 1.75471 1.33947H6.20176C6.57164 1.33947 6.87149 1.03962 6.87149 0.669736C6.87149 0.299851 6.57164 0 6.20176 0H1.75471C0.784528 0.00368893 -7.01315e-06 0.791218 0 1.76141V12.6446C0 13.0145 0.299851 13.3144 0.669736 13.3144C1.03962 13.3144 1.33947 13.0145 1.33947 12.6446L1.33278 12.6379Z"
      fill="currentColor"
    />
  ),
});

export default {
  title: "Icon",
  render: (props: any) => (
    <IconAlbum {...props} css={{ color: "$red", width: 25 }} />
  ),
};
