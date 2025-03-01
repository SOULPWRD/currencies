import {Currency} from "./types";

const filterMatches =
  (searchTerm: string) =>
  ({currency}: Currency) =>
    currency.toLowerCase() === searchTerm.toLocaleLowerCase();

const createRowData = ({currency, nameI18N, exchangeRate}: Currency) => ({
  currency,
  countryName: nameI18N,
  exchange: exchangeRate?.buy
});

export {createRowData, filterMatches};
