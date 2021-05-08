import { useState, useEffect } from "react";
import styled from "styled-components";
import { DropdownItems, MultiSelectWrapper } from "./";

const initialState = {
  placeholder: "Click to list of elements",
  focused: true,
};

function MultiSelect({ items }) {
  const [state, setState] = useState(initialState);
  const { placeholder, focused } = state;

  const onFocus = () => {
    setState((prevState) => ({
      ...prevState,
      placeholder: "",
      focused: true,
    }));
  };

  const onBlur = () => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        placeholder: initialState.placeholder,
        focused: false,
      }));
    }, 200);
  };

  return (
    <MultiSelectWrapper>
      <input onBlur={onBlur} placeholder={placeholder} onFocus={onFocus} />
      {focused && (
        <>
          <i className="fas fa-caret-down"></i>
          <DropdownItems items={items} />
        </>
      )}
    </MultiSelectWrapper>
  );
}

export default MultiSelect;
