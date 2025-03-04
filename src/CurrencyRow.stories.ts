import type {Meta, StoryObj} from "@storybook/react";

import {CurrencyRow} from "./CurrencyRow";

const meta = {
  title: "Example/CurrencyRow",
  component: CurrencyRow,
  tags: ["autodocs"]
} satisfies Meta<typeof CurrencyRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    countryCode: "sk",
    countryName: "Slovakia",
    currency: "EUR",
    exchangeRate: {
      buy: 1,
      indicator: 2,
      lastModified: new Date().toISOString(),
      middle: 1
    }
  }
};

export const NA: Story = {
  args: {
    countryName: "Slovakia",
    currency: "EUR"
  }
};
