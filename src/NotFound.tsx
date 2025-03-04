import type {FC} from "react";

type Props = {
  text?: string;
};

const NotFound: FC<Props> = ({text = "No results found"}) => {
  return <p className="not-found">{text}</p>;
};

export {NotFound};
