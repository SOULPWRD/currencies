import type {CountriesData} from "./data/preprocess";

const filterData = (data: CountriesData, searchTerm: string) => {
  return data[searchTerm.toUpperCase()] || Object.values(data).flat();
};

export {filterData};
