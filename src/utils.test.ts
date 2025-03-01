import {describe, it, expect, vi} from "vitest";
import {debounce} from "./utils";

describe("Debounce", () => {
  it("debounces the value", () => {
    const callbackMock = vi.fn((val: string) => val);
    let timerId: number | undefined;
    let counter = 0;

    const setTimeoutMock = vi.fn((callback: () => void) => {
      callback();
      counter += 1;
      timerId = counter;
      return timerId;
    });

    const clearTimeoutMock = vi.fn(() => {
      timerId = undefined;
    });
    const miliseconds = 1000;
    const setDebouncedValue = debounce<string>(callbackMock, miliseconds, {
      clearTimeout: clearTimeoutMock,
      setTimeout: setTimeoutMock
    });

    setDebouncedValue("Hello");
    expect(setTimeoutMock).toHaveBeenCalled();
    expect(callbackMock).toHaveBeenCalledWith("Hello");
    expect(timerId).toBe(counter);

    const unsubscribe = setDebouncedValue("Hello again!");
    expect(clearTimeoutMock).toHaveBeenCalled();
    expect(setTimeoutMock).toHaveBeenCalled();
    expect(callbackMock).toHaveBeenCalledWith("Hello again!");
    expect(timerId).toBe(counter);

    unsubscribe();
    expect(timerId).toBe(undefined);
  });
});
