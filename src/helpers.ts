import type {CountriesData} from "./data/preprocess";

const filterData = (data: CountriesData, searchTerm = "") => {
  if (searchTerm === "") {
    return Object.values(data).flat();
  }

  if (data[searchTerm] === undefined) {
    return [];
  }

  return data[searchTerm];
};

export {filterData};
