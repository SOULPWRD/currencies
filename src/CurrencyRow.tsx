import type {FC} from "react";
import type {Rate} from "./data/types";

type Props = {
  exchangeRate?: Rate;
  countryCode: string;
  countryName: string;
  currency: string;
};

const CurrencyRow: FC<Props> = ({
  currency,
  exchangeRate,
  countryCode,
  countryName
}) => {
  return (
    <li>
      <img src={`/flags/${countryCode.toLowerCase()}.png`}></img>
      <p>{currency}</p>
      <p>{countryName}</p>
      <p>{exchangeRate?.buy}</p>
    </li>
  );
};

export {CurrencyRow};
export type {Props};
