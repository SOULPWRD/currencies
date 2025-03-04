import {describe, it, expect} from "vitest";
import {filterData} from "./helpers";
import {dataMock} from "./mocks";

describe("filterData", () => {
  it("filters data based on the given search term", () => {
    expect(filterData(dataMock, "eur")).toEqual(dataMock["eur"]);
  });

  it("filters data based on the non-existing search term", () => {
    expect(filterData(dataMock, "xcd")).toEqual(Object.values(dataMock).flat());
  });
});
