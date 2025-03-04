import type {Meta, StoryObj} from "@storybook/react";
import {mockData} from "./stories/mocks";

import {CurrenciesList} from "./CurrenciesList";

const meta = {
  title: "Example/CurrenciesList",
  component: CurrenciesList,
  tags: ["autodocs"]
} satisfies Meta<typeof CurrenciesList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    currencies: mockData["EUR"]
  }
};
