import type {FC} from "react";
import type {Props as CurrencyProps} from "./CurrencyRow";
import type {Currency} from "./data/types";

import {useState, useCallback} from "react";
import {Header} from "./Header";
import {Search} from "./Search";
import {CurrenciesTable} from "./CurrenciesTable";
import {createRowData, filterMatches} from "./data/helpers";
import "./App.css";

type Props = {
  data: Currency[];
};

const App: FC<Props> = ({data}) => {
  const [findings, setFindings] = useState<CurrencyProps[]>([]);

  const onInput = useCallback(
    (searchTerm: string) => {
      const results = data.filter(filterMatches(searchTerm)).map(createRowData);
      setFindings(results);
    },
    [data]
  );

  return (
    <>
      <Header title="Currencies"></Header>
      <Search onInput={onInput}></Search>
      {findings.length ? <CurrenciesTable currencies={findings} /> : null}
    </>
  );
};

export default App;
