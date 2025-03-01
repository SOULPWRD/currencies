type Router = {
  pushUrl: <T>(url: URL, state: T) => void;
};

const createRouter = (history: History): Router => {
  return {
    pushUrl(url, state) {
      history.pushState(state, "", url);
    }
  };
};

export {createRouter};
export type {Router};
