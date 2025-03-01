type Rate = {
  buy: number;
  middle: number;
  sell?: number;
  indicator: number;
  lastModified: string;
};

type Currency = {
  currency: string;
  precision: number;
  nameI18N?: string;
  exchangeRate?: Rate;
  banknoteRate?: Rate;
  denominations?: number[];
  flags?: string[];
};

export type {Rate, Currency};
