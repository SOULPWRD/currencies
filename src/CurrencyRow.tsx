import type {FC} from "react";

type Props = {
  countryName?: string;
  currency: string;
  exchange?: number;
};

const CurrencyRow: FC<Props> = ({currency, countryName, exchange}) => {
  return (
    <tr>
      <td>Flag</td>
      <td>{currency}</td>
      <td>{countryName}</td>
      <td>{exchange}</td>
    </tr>
  );
};

export {CurrencyRow};
export type {Props};
