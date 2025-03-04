import type {Meta, StoryObj} from "@storybook/react";
import {dataMock} from "./mocks";

import {App} from "./App";

const meta = {
  title: "Example/App",
  component: App,
  tags: ["autodocs"]
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: dataMock,
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
    data: dataMock,
    history,
    searchKey: "search",
    url
  }
};
