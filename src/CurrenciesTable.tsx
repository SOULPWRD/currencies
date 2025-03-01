import type {FC} from "react";
import type {Props as CurrencyProp} from "./CurrencyRow";
import {CurrencyRow} from "./CurrencyRow";

type Props = {
  currencies: CurrencyProp[];
};

const CurrenciesTable: FC<Props> = ({currencies}) => {
  return (
    <table>
      <tbody>
        {currencies.map((currency) => (
          <CurrencyRow key={currency.currency} {...currency} />
        ))}
      </tbody>
    </table>
  );
};

export {CurrenciesTable};
