import type {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";

import {Search} from "./Search";

const meta = {
  title: "Example/Search",
  component: Search,
  tags: ["autodocs"],
  args: {onInput: fn()}
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Search",
    onInput: fn()
  }
};
