import { useState, useEffect } from "react";
import styled from "styled-components";
import { DropdownItems, MultiSelectWrapper, InputItem, InputItems } from "./";
import { initialState } from "./initialState";
import { swapArrayEl } from "./helper";

export default function MultiSelect({ items }) {
  const [state, setState] = useState({ ...initialState });
  const { placeholder, focused, dropdownItems, inputItems } = state;
  const hasInputItems = !!inputItems.length;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      dropdownItems: items,
    }));
  }, [items]);

  const onFocus = () => {
    setState((prevState) => ({
      ...prevState,
      placeholder: "",
      focused: true,
    }));
  };

  const onBlur = async () => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        placeholder: initialState.placeholder,
        focused: false,
      }));
    }, 200);
  };

  const onDropdownItemClick = (dropdownItem) => {
    setState((prevState) => {
      const { filteredArrayToRemoveFrom, arrayToAddCopy } = swapArrayEl(
        prevState.dropdownItems,
        prevState.inputItems,
        dropdownItem
      );

      return {
        ...prevState,
        dropdownItems: filteredArrayToRemoveFrom,
        inputItems: arrayToAddCopy,
      };
    });
  };

  const onInputItemClick = (inputItem) => {
    setState((prevState) => {
      const { filteredArrayToRemoveFrom, arrayToAddCopy } = swapArrayEl(
        prevState.inputItems,
        prevState.dropdownItems,
        inputItem
      );

      return {
        ...prevState,
        dropdownItems: arrayToAddCopy,
        inputItems: filteredArrayToRemoveFrom,
      };
    });
  };

  return (
    <MultiSelectWrapper>
      <input
        onBlur={onBlur}
        placeholder={hasInputItems ? "" : placeholder}
        onFocus={onFocus}
      />
      {hasInputItems && (
        <InputItems
          onInputItemClick={onInputItemClick}
          inputItems={inputItems}
        />
      )}
      {focused && (
        <>
          <i className="fas fa-caret-down"></i>
          <DropdownItems
            onDropdownItemClick={onDropdownItemClick}
            dropdownItems={dropdownItems}
          />
        </>
      )}
    </MultiSelectWrapper>
  );
}
