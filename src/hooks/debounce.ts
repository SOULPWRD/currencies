import {debounce} from "../utils";
import {useRef} from "react";

const useDebounce = <T>(callback: (value: T) => void, miliseconds: number) => {
  const ref = useRef<(value: T) => void>(
    debounce<T>(callback, miliseconds, {
      clearTimeout: window.clearInterval,
      setTimeout: window.setTimeout
    })
  );

  return ref.current;
};

export {useDebounce};
