import type {CountriesData} from "./data/preprocess";

const filterData = (data: CountriesData, searchTerm = "") => {
  return data[searchTerm] || Object.values(data).flat();
};

export {filterData};
