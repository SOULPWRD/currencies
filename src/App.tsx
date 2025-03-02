import type {FC} from "react";
import type {Props as CurrencyProps} from "./CurrencyRow";
import type {Currency} from "./data/types";

import {useState, useCallback, useEffect} from "react";
import {Header} from "./Header";
import {Search} from "./Search";
import {CurrenciesList} from "./CurrenciesList";
import {findCurrencies} from "./data/helpers";
import {useDebounce} from "./hooks/debounce";

import "./App.css";

type Props = {
  data: Currency[];
  searchKey: string;
  url: URL;
  history: History;
};

const App: FC<Props> = ({data, history, searchKey, url}) => {
  const searchTerm = url.searchParams.get(searchKey);
  const [findings, setFindings] = useState<CurrencyProps[]>([]);
  const debounce = useDebounce<string>((searchTerm) => {
    url.searchParams.set(searchKey, searchTerm);
    history.pushState({}, "", url);
  }, 250);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    const results = findCurrencies(data, searchTerm);
    setFindings(results);
  }, [data, searchTerm]);

  const onInput = useCallback(
    (searchTerm: string) => {
      const results = findCurrencies(data, searchTerm);
      setFindings(results);
      if (results.length > 0) {
        debounce(searchTerm);
      }
    },
    [data, debounce]
  );

  return (
    <>
      <Header title="Goerge FE Test"></Header>
      <Search onInput={onInput}></Search>
      {findings.length ? <CurrenciesList currencies={findings} /> : null}
    </>
  );
};

export default App;
