import type {Meta, StoryObj} from "@storybook/react";
import type {CountriesData} from "./data/preprocess";

import {App} from "./App";

const meta = {
  title: "Example/App",
  component: App,
  tags: ["autodocs"]
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData: CountriesData = {
  EUR: [
    {
      countryCode: "SK",
      countryName: "Slovakia",
      currency: "EUR",
      exchangeRate: {
        buy: 1,
        indicator: 2,
        lastModified: new Date().toISOString(),
        middle: 1
      }
    },
    {
      countryCode: "ES",
      countryName: "Spain",
      currency: "EUR",
      exchangeRate: {
        buy: 1,
        indicator: 2,
        lastModified: new Date().toISOString(),
        middle: 1
      }
    }
  ]
};

export const Primary: Story = {
  args: {
    data: mockData,
    history,
    searchKey: "search",
    url: new URL(location.href)
  }
};

// setting a default state
const url = new URL(location.href);
url.searchParams.set("search", "eur");
history.replaceState({}, "", url);

export const WithSearchParams: Story = {
  args: {
    data: mockData,
    history,
    searchKey: "search",
    url
  }
};
