import type {ChangeEventHandler, FC} from "react";

type Props = {
  label: string;
  onInput: (searchTerm: string) => void;
};

const Search: FC<Props> = ({onInput, label}) => {
  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchTerm = event.target.value;
    onInput(searchTerm);
  };

  return (
    <div className="search">
      <label htmlFor="search">{label}</label>
      <input id="search" onInput={handleInput} type="text"></input>
    </div>
  );
};

export {Search};
