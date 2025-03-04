import type {CountriesData} from "./data/preprocess";
import type {Currency} from "./data/types";
import {countries} from "countries-list";

const dataMock: CountriesData = {
  EUR: [
    {
      id: crypto.randomUUID(),
      countryCode: "SK",
      countryName: "Slovakia",
      currency: "EUR",
      exchangeRate: {
        buy: 1,
        indicator: 2,
        lastModified: new Date().toISOString(),
        middle: 1
      }
    },
    {
      id: crypto.randomUUID(),
      countryCode: "ES",
      countryName: "Spain",
      currency: "EUR",
      exchangeRate: {
        buy: 1,
        indicator: 2,
        lastModified: new Date().toISOString(),
        middle: 1
      }
    }
  ],
  USD: [
    {
      id: crypto.randomUUID(),
      countryCode: "US",
      countryName: "USA",
      currency: "USD",
      exchangeRate: {
        buy: 1.18,
        indicator: 2,
        lastModified: new Date().toISOString(),
        middle: 1
      }
    }
  ]
};

const currenciesMock: Currency[] = [
  {
    currency: "USD",
    precision: 2,
    exchangeRate: {
      buy: 1.14,
      indicator: 0,
      lastModified: new Date().toISOString(),
      middle: 1
    }
  },
  {
    currency: "EUR",
    precision: 2,
    exchangeRate: {
      buy: 1,
      indicator: 0,
      lastModified: new Date().toISOString(),
      middle: 1
    }
  }
];

const countriesMock = {
  AT: countries.AT,
  SK: countries.SK
};

export {dataMock, currenciesMock, countriesMock};
