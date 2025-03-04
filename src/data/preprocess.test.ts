import {TCountries} from "countries-list";
import {describe, it, expect} from "vitest";
import {preprocessCurrency, preprocessData} from "./preprocess";
import {countriesMock, currenciesMock} from "../mocks";

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
            id: expect.any(String),
            countryCode: "AT",
            currency: "EUR",
            countryName: "Austria",
            exchangeRate: eur.exchangeRate
          },
          {
            id: expect.any(String),
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
