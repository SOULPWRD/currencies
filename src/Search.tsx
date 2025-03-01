import type {ChangeEventHandler, FC} from "react";

type Props = {
  onInput: (searchTerm: string) => void;
};

const Search: FC<Props> = ({onInput}) => {
  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchTerm = event.target.value;
    onInput(searchTerm);
  };

  return <input onInput={handleInput} type="text"></input>;
};

export {Search};
