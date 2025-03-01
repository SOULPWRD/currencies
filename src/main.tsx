import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import data from "./data/fx.json";
import {createRouter} from "./router.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App
      data={data["fx"]}
      router={createRouter(history)}
      searchKey="currency"
    />
  </StrictMode>
);
