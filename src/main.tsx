import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import data from "./data/fx.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App
      data={data["fx"]}
      searchKey="currency"
      url={new URL(location.href)}
      history={history}
    />
  </StrictMode>
);
