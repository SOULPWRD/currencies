import type {CountriesData} from "./data/preprocess";
import type {Currency} from "./data/types";
import {countries} from "countries-list";

const dataMock: CountriesData = {
  eur: [
    {
      id: crypto.randomUUID(),
      countryCode: "SK",
      countryName: "Slovakia",
      currency: "eur",
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
      currency: "eur",
      exchangeRate: {
        buy: 1,
        indicator: 2,
        lastModified: new Date().toISOString(),
        middle: 1
      }
    }
  ],
  usd: [
    {
      id: crypto.randomUUID(),
      countryCode: "US",
      countryName: "USA",
      currency: "usd",
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
    currency: "usd",
    precision: 2,
    exchangeRate: {
      buy: 1.14,
      indicator: 0,
      lastModified: new Date().toISOString(),
      middle: 1
    }
  },
  {
    currency: "eur",
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
