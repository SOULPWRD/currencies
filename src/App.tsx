import type {FC} from "react";
import type {CountriesData} from "./data/preprocess";

import {useState, useCallback} from "react";
import {Header} from "./Header";
import {Search} from "./Search";
import {CurrenciesList} from "./CurrenciesList";
import {NotFound} from "./NotFound";
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
  const term = url.searchParams.get(searchKey)?.toLocaleLowerCase();
  const [searchTerm, setSeachTerm] = useState<string | undefined>(term);
  const debounce = useDebounce<string>((searchTerm) => {
    setSeachTerm(searchTerm);
    url.searchParams.set(searchKey, searchTerm);
    history.replaceState({}, "", url);
  }, 250);

  const onInput = useCallback(
    (searchTerm: string) => {
      debounce(searchTerm);
    },
    [debounce]
  );

  const findings = filterData(data, searchTerm);

  return (
    <>
      <Header title="Goerge FE Test"></Header>
      <Search value={term} label="Search" onInput={onInput}></Search>
      {findings.length ? (
        <CurrenciesList currencies={findings} />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export {App};
