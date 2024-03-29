import { useContext, useRef } from "react";
import { GlobalContext } from "../App";
import "../App.css";

export const Input = () => {
  const inputRef = useRef(null);
  const {
    dispatch,
    state: { inputValue, editingCity },
  } = useContext(GlobalContext);
  const handleOnAdd = () => {
    if (inputValue.length) {
      dispatch({
        type: "ADD_CITY",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
        payload: inputValue,
      });
    }
  };

  const handleOnDone = () => {
    if (inputValue.length) {
      dispatch({
        type: "EDIT_CITY_DONE",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
        payload: inputValue,
      });
    }
  };

  const handleOnChange = (event) => {
    dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: event.target.value,
    });
  };

  return (
    <div className="InputWrap">
      <input
        className="Input"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      {editingCity ? (
        <button className="Button" onClick={handleOnDone}>
          done
        </button>
      ) : (
        <button className="Button" onClick={handleOnAdd}>
          +
        </button>
      )}
    </div>
  );
};
