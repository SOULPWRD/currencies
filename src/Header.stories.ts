import type {Meta, StoryObj} from "@storybook/react";
import "./index.css";

import {Header} from "./Header";

const meta = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"]
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title"
  }
};
