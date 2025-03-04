import {TCountries} from "countries-list";
import {describe, it, expect} from "vitest";
import {preprocessCurrency, preprocessData} from "./preprocess";
import {countriesMock, currenciesMock} from "../mocks";

describe("preprocessCurrency", () => {
  it("preprocesses currency data", () => {
    const [usd, eur] = currenciesMock;

    expect(preprocessCurrency(currenciesMock)).toEqual({
      usd: {
        currency: "usd",
        exchangeRate: usd.exchangeRate
      },
      eur: {
        currency: "eur",
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
        eur: [
          {
            id: expect.any(String),
            countryCode: "AT",
            currency: "eur",
            countryName: "Austria",
            exchangeRate: eur.exchangeRate
          },
          {
            id: expect.any(String),
            countryCode: "SK",
            currency: "eur",
            countryName: "Slovakia",
            exchangeRate: eur.exchangeRate
          }
        ]
      }
    );
  });
});
