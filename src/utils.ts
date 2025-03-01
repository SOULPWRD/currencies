type DebounceConfig = {
  setTimeout: (callback: () => void, miliseconds: number) => number;
  clearTimeout: (timerId: number) => void;
};

function debounce<T>(
  callback: (data: T) => void,
  miliseconds: number,
  {clearTimeout, setTimeout}: DebounceConfig
) {
  let timerId: number | undefined;

  const usubscribe = () => {
    clearTimeout(timerId as number);
    timerId = undefined;
  };

  return (data: T) => {
    if (timerId !== undefined) {
      usubscribe();
    }

    timerId = setTimeout(() => {
      callback(data);
    }, miliseconds);

    return () => usubscribe();
  };
}

export {debounce};
