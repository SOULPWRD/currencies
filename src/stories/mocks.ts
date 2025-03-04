import type {CountriesData} from "../data/preprocess";

const mockData: CountriesData = {
  EUR: [
    {
      countryCode: "SK",
      countryName: "Slovakia",
      currency: "EUR",
      exchangeRate: {
        buy: 1,
        indicator: 2,
        lastModified: new Date().toISOString(),
        middle: 1
      }
    },
    {
      countryCode: "ES",
      countryName: "Spain",
      currency: "EUR",
      exchangeRate: {
        buy: 1,
        indicator: 2,
        lastModified: new Date().toISOString(),
        middle: 1
      }
    }
  ]
};

export {mockData};
