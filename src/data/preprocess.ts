import type {TCountries, ICountry, TCountryCode} from "countries-list";
import type {Currency} from "./types";

// The only task of these preprocessors is to get the data into format of a simple map.
// So the data would be grouped by given currecies.
// The reason why we organize the data into the following structure
// is to make lookups very fast. In the terminology of BigO notation it should O(1).

type CurrencyRow = Pick<Currency, "exchangeRate" | "currency" | "precision">;
type CurrencyData = Record<string, CurrencyRow>;
type CountriesData = Record<
  string,
  (CurrencyRow & {
    id: string;
    countryCode: TCountryCode;
    countryName: ICountry["name"];
  })[]
>;

const preprocessCurrency = (currencies: Currency[]) => {
  return currencies.reduce((record, {currency, exchangeRate, precision}) => {
    currency = currency.toLocaleLowerCase();
    record[currency] = {currency, exchangeRate, precision};
    return record;
  }, {} as CurrencyData);
};

const preprocessData = (countries: TCountries, currencies: Currency[]) => {
  const preprocessedCurrencies = preprocessCurrency(currencies);

  return Object.entries(countries).reduce((acc, [key, value]) => {
    const {currency} = value;

    currency.forEach((currency) => {
      currency = currency.toLocaleLowerCase();
      if (acc[currency] === undefined) {
        acc[currency] = [];
      }

      acc[currency].push({
        ...preprocessedCurrencies[currency],
        id: crypto.randomUUID(),
        countryName: value.name,
        countryCode: key as TCountryCode
      });
    });

    return acc;
  }, {} as CountriesData);
};

export {preprocessCurrency, preprocessData};
export type {CountriesData};
