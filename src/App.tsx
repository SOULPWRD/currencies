import type {FC} from "react";
import type {Props as CurrencyProps} from "./CurrencyRow";
import type {CountriesData} from "./data/preprocess";

import {useState, useCallback} from "react";
import {Header} from "./Header";
import {Search} from "./Search";
import {CurrenciesList} from "./CurrenciesList";
import {useDebounce} from "./hooks/debounce";
import {filterData} from "./helpers";

import "./App.css";

type Props = {
  data: CountriesData;
  searchKey: string;
  url: URL;
  history: History;
};

const App: FC<Props> = ({data, history, searchKey, url}) => {
  const searchTerm = url.searchParams.get(searchKey)?.toUpperCase();
  const [findings, setFindings] = useState<CurrencyProps[]>(
    filterData(data, searchTerm as string)
  );
  const debounce = useDebounce<string>((searchTerm) => {
    const results = filterData(data, searchTerm);
    setFindings(results);
    url.searchParams.set(searchKey, searchTerm);
    history.replaceState({}, "", url);
  }, 250);

  const onInput = useCallback(
    (searchTerm: string) => {
      debounce(searchTerm);
    },
    [debounce]
  );

  return (
    <>
      <Header title="Goerge FE Test"></Header>
      <Search
        value={searchTerm?.toLocaleLowerCase()}
        label="Search"
        onInput={onInput}
      ></Search>
      {findings ? <CurrenciesList currencies={findings} /> : null}
    </>
  );
};

export {App};
