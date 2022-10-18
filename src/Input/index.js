import { useState, useRef } from "react";
import "../App.css";

export const Input = ({ setCitiesList }) => {
  const [inputValue, setInputValue] = useState('empty');
  const inputRef = useRef(null)
  const handleOnClick = () => {
    setCitiesList((currentArray) => [...currentArray, inputValue]);
    inputRef.current.focus();
  };
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="InputWrap">
      <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef} />
      <button className="Button" onClick={handleOnClick}>
        +
      </button>
    </div>
  );
};
