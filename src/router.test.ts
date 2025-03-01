import {describe, it, expect, vi} from "vitest";
import {createRouter} from "./router";

describe("createRouter", () => {
  it("pushes new url", () => {
    const historyMock: History = {
      pushState: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      go: vi.fn(),
      length: 1,
      replaceState: vi.fn(),
      scrollRestoration: "manual",
      state: ""
    };

    const router = createRouter(historyMock);
    const url = new URL("https://url.com");
    url.searchParams.set("foo", "bar");
    const state = {};
    router.pushUrl(url, state);

    expect(historyMock.pushState).toHaveBeenCalledWith(state, "", url);
  });
});
