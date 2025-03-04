import type {ChangeEventHandler, FC} from "react";
import {useState} from "react";

type Props = {
  value?: string;
  label: string;
  onInput: (searchTerm: string) => void;
};

const Search: FC<Props> = ({onInput, label, value}) => {
  const [inputValue, setValue] = useState(value);
  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchTerm = event.target.value;
    setValue(searchTerm);
    onInput(searchTerm);
  };

  return (
    <div className="search">
      <label htmlFor="search">{label}</label>
      <input
        value={inputValue || ""}
        id="search"
        onInput={handleInput}
        type="text"
      ></input>
    </div>
  );
};

export {Search};
