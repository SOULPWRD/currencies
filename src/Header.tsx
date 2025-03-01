import type {FC} from "react";

type Props = {
  title: string;
};

const Header: FC<Props> = ({title}) => {
  return (
    <header>
      <p>{title}</p>
    </header>
  );
};

export {Header};
