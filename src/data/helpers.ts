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

const findCurrencies = (data: Currency[], searchTerm: string) =>
  data.filter(filterMatches(searchTerm)).map(createRowData);

export {createRowData, filterMatches, findCurrencies};
