import {describe, it, expect} from "vitest";
import {filterData} from "./helpers";
import {dataMock} from "./mocks";

describe("filterData", () => {
  it("filters data based on the given search term", () => {
    expect(filterData(dataMock, "eur")).toEqual(dataMock["eur"]);
  });

  it("returns an empty list when the search term does not match key", () => {
    expect(filterData(dataMock, "a")).toEqual([]);
  });

  it("return all results when the search term is an empty string", () => {
    expect(filterData(dataMock, "")).toEqual(Object.values(dataMock).flat());
  });
});
