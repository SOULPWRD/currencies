import {describe, it, expect} from "vitest";
import {filterData} from "./helpers";
import {dataMock} from "./mocks";

describe("filterData", () => {
  it("filters data based on the given search term", () => {
    expect(filterData(dataMock, "EUR")).toEqual(dataMock["EUR"]);
  });

  it("filters data based on the non-existing search term", () => {
    expect(filterData(dataMock, "XCD")).toEqual(Object.values(dataMock).flat());
  });
});
