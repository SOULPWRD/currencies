import type {Currency} from "./types";

import {countries, TCountries} from "countries-list";
import {describe, it, expect} from "vitest";
import {preprocessCurrency, preprocessData} from "./preprocess";

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

describe("preprocessCurrency", () => {
  it("preprocesses currency data", () => {
    const [usd, eur] = currenciesMock;

    expect(preprocessCurrency(currenciesMock)).toEqual({
      USD: {
        currency: "USD",
        exchangeRate: usd.exchangeRate
      },
      EUR: {
        currency: "EUR",
        exchangeRate: eur.exchangeRate
      }
    });
  });
});

describe("preprocessData", () => {
  it("preprocesses into the map currencies", () => {
    const eur = currenciesMock[1];
    expect(preprocessData(countriesMock as TCountries, currenciesMock)).toEqual(
      {
        EUR: [
          {
            countryCode: "AT",
            currency: "EUR",
            countryName: "Austria",
            exchangeRate: eur.exchangeRate
          },
          {
            countryCode: "SK",
            currency: "EUR",
            countryName: "Slovakia",
            exchangeRate: eur.exchangeRate
          }
        ]
      }
    );
  });
});
