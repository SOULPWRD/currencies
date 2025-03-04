import type {FC, ReactEventHandler} from "react";
import type {Rate} from "./data/types";

import {NA} from "./constants";

type Props = {
  id: string;
  exchangeRate?: Rate;
  countryCode?: string;
  countryName?: string;
  currency?: string;
  precision?: number;
};

const CurrencyRow: FC<Props> = ({
  currency,
  exchangeRate,
  countryCode,
  countryName,
  precision
}) => {
  return (
    <li className="row">
      <img
        onError={(event) => {
          (event.target as HTMLImageElement).src = `/flags/unknown.png`;
        }}
        src={`/flags/${countryCode?.toLowerCase()}.png`}
      ></img>
      <p>{countryName || NA}</p>
      <p>{currency?.toUpperCase() || NA}</p>
      <p>{exchangeRate?.buy ? exchangeRate.buy.toFixed(precision) : NA}</p>
    </li>
  );
};

export {CurrencyRow};
export type {Props};
