import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {countries} from "countries-list";
import "./index.css";
import {App} from "./App.tsx";
import currencies from "./data/fx.json";
import {preprocessData} from "./data/preprocess.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App
      data={preprocessData(countries, currencies["fx"])}
      searchKey="search"
      url={new URL(location.href)}
      history={history}
    />
  </StrictMode>
);
