import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  DropdownItems,
  MultiSelectWrapper,
  InputItem,
  InputItems,
  Input,
} from "./";
import { initialState } from "./initialState";
import { swapArrayEl } from "./helper";

export default function MultiSelect({ items }) {
  const [state, setState] = useState({ ...initialState });
  const { placeholder, focused, dropdownItems, inputItems, inputValue } = state;
  const hasInputItems = !!inputItems.length;
  const inputPlaceholder = hasInputItems ? "" : placeholder;

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

  const onInputChange = ({ target: { value } }) => {
    setState((prevState) => ({
      ...prevState,
      inputValue: value,
    }));
  };

  return (
    <MultiSelectWrapper>
      <Input
        onChange={onInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={inputPlaceholder}
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
            inputValue={inputValue}
            onDropdownItemClick={onDropdownItemClick}
            dropdownItems={dropdownItems}
          />
        </>
      )}
    </MultiSelectWrapper>
  );
}
