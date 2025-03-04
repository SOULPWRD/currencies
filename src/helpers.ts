import type {CountriesData} from "./data/preprocess";

const filterData = (data: CountriesData, searchTerm = "") => {
  return data[searchTerm?.toUpperCase()] || Object.values(data).flat();
};

export {filterData};
