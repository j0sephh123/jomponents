import { useState, useEffect } from "react";
import styled from "styled-components";
import Items from "./DropdownItems";

const initialState = {
  placeholder: "Click to list of elements",
  focused: true,
};

const MultiSelectWrapper = styled.div({
  position: "relative",
  input: {
    width: "100%",
    padding: "10px 6px 10px",
    caretColor: "transparent",
    fontSize: "24px",
    border: "1px solid lightslategray",
    borderRadius: "6px",
    "&::placeholder": {
      fontSize: "24px",
    },
  },
  ".fa-caret-down": {
    position: "absolute",
    right: "0",
    top: "17px",
  },
  ".dropdownItems": {
    marginTop: "1px",
    padding: "10px 0px 10px 12px",
    width: "100%",
    border: "1px solid black",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    ".dropdownItem": {
      display: "inline-block",
      cursor: "pointer",
      padding: "6px 0px",
      "&:hover": {
        backgroundColor: "aliceblue",
      },
    },
  },
});

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
          <Items items={items} />
        </>
      )}
    </MultiSelectWrapper>
  );
}

export default MultiSelect;
