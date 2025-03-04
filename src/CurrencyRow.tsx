import type {FC} from "react";
import type {Rate} from "./data/types";
import {NA} from "./constants";

type Props = {
  exchangeRate?: Rate;
  countryCode?: string;
  countryName?: string;
  currency?: string;
};

const CurrencyRow: FC<Props> = ({
  currency,
  exchangeRate,
  countryCode,
  countryName
}) => {
  return (
    <li className="row">
      <img src={`/flags/${countryCode?.toLowerCase()}.png`}></img>
      <p>{countryName || NA}</p>
      <p>{currency || NA}</p>
      <p>{exchangeRate?.buy || NA}</p>
    </li>
  );
};

export {CurrencyRow};
export type {Props};
