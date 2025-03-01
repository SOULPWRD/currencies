import type {FC} from "react";
import type {Props as CurrencyProps} from "./CurrencyRow";
import type {Currency} from "./data/types";
import type {Router} from "./router";

import {useState, useCallback} from "react";
import {Header} from "./Header";
import {Search} from "./Search";
import {CurrenciesTable} from "./CurrenciesTable";
import {createRowData, filterMatches} from "./data/helpers";
import {useDebounce} from "./hooks/debounce";

import "./App.css";

type Props = {
  data: Currency[];
  router: Router;
  searchKey: string;
};

const App: FC<Props> = ({data, router, searchKey}) => {
  const [findings, setFindings] = useState<CurrencyProps[]>([]);
  const debouncer = useDebounce<string>((searchTerm) => {
    const url = new URL(location.href);
    url.searchParams.set(searchKey, searchTerm);
    router.pushUrl(url, {});
  }, 250);

  const onInput = useCallback(
    (searchTerm: string) => {
      const results = data.filter(filterMatches(searchTerm)).map(createRowData);
      setFindings(results);
      if (results.length > 0) {
        debouncer(searchTerm);
      }
    },
    [data, debouncer]
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
