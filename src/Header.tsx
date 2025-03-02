import type {FC} from "react";

type Props = {
  title: string;
};

const Header: FC<Props> = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export {Header};
