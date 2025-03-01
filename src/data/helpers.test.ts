import type {Currency} from "./types";

import {describe, it, expect} from "vitest";

import {createRowData, filterMatches} from "./helpers";

const currency: Currency = {
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

describe("createRowData", () => {
  it("transforms currency payload", () => {
    expect(createRowData(currency)).toEqual({
      currency: currency.currency,
      countryName: currency.nameI18N,
      exchange: currency.exchangeRate?.buy
    });
  });
});

describe("filterMatches", () => {
  it("filters out unknown searchterm", () => {
    expect(filterMatches("EUR")(currency)).toBe(true);
    expect(filterMatches("USD")(currency)).toBe(false);
  });
});
