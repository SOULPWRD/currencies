import type {FC} from "react";
import type {Props as CurrencyProp} from "./CurrencyRow";
import {CurrencyRow} from "./CurrencyRow";

type Props = {
  currencies: CurrencyProp[];
};

const CurrenciesList: FC<Props> = ({currencies}) => {
  return (
    <ul className="results">
      {currencies.map((currency) => (
        <CurrencyRow key={`${currency.id}`} {...currency} />
      ))}
    </ul>
  );
};

export {CurrenciesList};
