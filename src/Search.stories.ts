import type {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";

import {Search} from "./Search";

const meta = {
  title: "Example/Search",
  component: Search,
  tags: ["autodocs"]
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Search",
    onInput: fn()
  }
};

export const InitialValue: Story = {
  args: {
    label: "Search",
    onInput: fn(),
    value: "EUR"
  }
};
