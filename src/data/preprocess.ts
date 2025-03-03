import type {TCountries, ICountry, TCountryCode} from "countries-list";
import type {Currency} from "./types";

type CurrencyRow = Pick<Currency, "exchangeRate" | "currency">;
type CurrencyData = Record<string, CurrencyRow>;
type CountriesData = Record<
  string,
  (CurrencyRow & {countryCode: TCountryCode; countryName: ICountry["name"]})[]
>;

const preprocessCurrency = (currencies: Currency[]) => {
  return currencies.reduce((record, {currency, exchangeRate}) => {
    record[currency] = {currency, exchangeRate};
    return record;
  }, {} as CurrencyData);
};

const preprocessData = (
  countries: TCountries,
  currencies: Currency[]
): CountriesData => {
  const preprocessedCurrencies = preprocessCurrency(currencies);

  return Object.entries(countries).reduce((acc, [key, value]) => {
    const {currency} = value;

    currency.forEach((currency) => {
      if (acc[currency] === undefined) {
        acc[currency] = [];
      }

      acc[currency].push({
        ...preprocessedCurrencies[currency],
        countryName: value.name,
        countryCode: key as TCountryCode
      });
    });

    return acc;
  }, {} as CountriesData);
};

export {preprocessCurrency, preprocessData};
export type {CountriesData};
