import type {Currency} from "./types";

import {describe, it, expect} from "vitest";

import {createRowData, filterMatches, findCurrencies} from "./helpers";

const currencyMock: Currency = {
  currency: "EUR",
  precision: 2,
  nameI18N: "Euro",
  denominations: [500, 200, 100, 50, 20, 10, 5],
  exchangeRate: {
    buy: 1.0,
    middle: 1.0,
    sell: 1.0,
    indicator: 0,
    lastModified: "2001-12-31T23:00:00Z"
  },
  banknoteRate: {
    buy: 1.0,
    middle: 1.0,
    sell: 1.0,
    indicator: 0,
    lastModified: "2008-08-06T22:00:00Z"
  },
  flags: ["provided", "tradingProhibited"]
};

const rowDataMock = {
  currency: currencyMock.currency,
  countryName: currencyMock.nameI18N,
  exchange: currencyMock.exchangeRate?.buy
};

describe("createRowData", () => {
  it("transforms currency payload", () => {
    expect(createRowData(currencyMock)).toEqual(rowDataMock);
  });
});

describe("filterMatches", () => {
  it("filters out unknown searchterm", () => {
    expect(filterMatches("EUR")(currencyMock)).toBe(true);
    expect(filterMatches("USD")(currencyMock)).toBe(false);
  });
});

describe("findCurrencies", () => {
  it("finds currencies for the given currency", () => {
    expect(findCurrencies([currencyMock], "EUR")).toEqual([rowDataMock]);
  });

  it("returns an empty result for the given currency", () => {
    expect(findCurrencies([currencyMock], "USD")).toEqual([]);
  });
});
