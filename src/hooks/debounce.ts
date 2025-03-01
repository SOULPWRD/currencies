import {useCallback} from "react";
import {debounce} from "../utils";

const useDebounce = <T>(callback: (value: T) => void, miliseconds: number) => {
  const fn = debounce<T>(callback, miliseconds, {
    clearTimeout: window.clearInterval,
    setTimeout: window.setTimeout
  });

  return useCallback((value: T) => fn(value), [fn]);
};

export {useDebounce};
