import type {Meta, StoryObj} from "@storybook/react";

import {NotFound} from "./NotFound";

const meta = {
  title: "Example/NotFound",
  component: NotFound,
  tags: ["autodocs"]
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};

export const WithCustomMessage: Story = {
  args: {
    text: "No currencies found"
  }
};
