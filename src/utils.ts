type Config = {
  setTimeout: (callback: () => void, miliseconds: number) => number;
  clearTimeout: (timerId: number) => void;
};

function debounce<T>(
  callback: (data: T) => void,
  miliseconds = 500,
  {clearTimeout = window.clearTimeout, setTimeout = window.setTimeout}: Config
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
