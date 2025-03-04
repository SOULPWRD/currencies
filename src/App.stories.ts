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

const pushSearchTerm = (searchTerm: string) => {
  const url = new URL(location.href);
  url.searchParams.set("search", searchTerm);
  history.replaceState({}, "", url);
  return url;
};

export const Primary: Story = {
  args: {
    data: dataMock,
    history,
    searchKey: "search",
    url: new URL(location.href)
  }
};

export const WithSearchParams: Story = {
  args: {
    data: dataMock,
    history,
    searchKey: "search",
    url: pushSearchTerm("eur")
  }
};

export const WithNoFound: Story = {
  args: {
    data: dataMock,
    history,
    searchKey: "search",
    url: pushSearchTerm("a")
  }
};
