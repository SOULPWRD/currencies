import type {FC} from "react";
import type {Props as CurrencyProps} from "./CurrencyRow";
import type {CountriesData} from "./data/preprocess";

import {useState, useCallback, useEffect} from "react";
import {Header} from "./Header";
import {Search} from "./Search";
import {CurrenciesList} from "./CurrenciesList";
import {useDebounce} from "./hooks/debounce";

import "./App.css";

type Props = {
  data: CountriesData;
  searchKey: string;
  url: URL;
  history: History;
};

const App: FC<Props> = ({data, history, searchKey, url}) => {
  const searchTerm = url.searchParams.get(searchKey)?.toUpperCase();
  const [findings, setFindings] = useState<CurrencyProps[]>();
  const debounce = useDebounce<string>((searchTerm) => {
    url.searchParams.set(searchKey, searchTerm);
    history.pushState({}, "", url);
  }, 250);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    const results = data[searchTerm];
    setFindings(results);
  }, [data, searchTerm]);

  const onInput = useCallback(
    (searchTerm: string) => {
      const results = data[searchTerm];
      setFindings(results);
      if (results.length > 0) {
        debounce(searchTerm.toUpperCase());
      }
    },
    [data, debounce]
  );

  return (
    <>
      <Header title="Goerge FE Test"></Header>
      <Search label="Search" onInput={onInput}></Search>
      {findings ? <CurrenciesList currencies={findings} /> : null}
    </>
  );
};

export default App;
