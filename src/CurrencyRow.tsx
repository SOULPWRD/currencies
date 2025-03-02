import type {FC} from "react";

type Props = {
  currency: string;
  exchange?: number;
};

const CurrencyRow: FC<Props> = ({currency, exchange}) => {
  return (
    <li>
      <img src="/flags/ad.png"></img>
      <p>{currency}</p>
      <p>{exchange}</p>
    </li>
  );
};

export {CurrencyRow};
export type {Props};
