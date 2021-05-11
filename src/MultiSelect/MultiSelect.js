import { useState, useEffect } from "react";
import { DropdownItems, MultiSelectWrapper, InputItems, Input } from "./";
import { initialState } from "./initialState";
import { timeout, setNext, addElement, removeElement } from "./helper";
import { keyCodes } from "./constants";

// export const initialState = {
//   placeholder: "Click to list of elements",
//   selectFromListPlaceholder: "Select from the list",
//   focused: false,
//   dropdownItems: [],
//   inputItems: [],
//   inputValue: "",
//   filteredDropdownItems: [],
//   hoveredItem: null,
// };

export default function MultiSelect(props) {
  console.log(props);
  const [state, setState] = useState({
    ...initialState,
    ...props,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      props,
    }));
  }, [props]);

  const {
    placeholder,
    focused,
    dropdownItems,
    inputItems,
    inputValue,
    filteredDropdownItems,
    hoveredItem,
  } = state;
  const hasInputItems = !!inputItems.length;
  const showDropdownItems = focused && !!filteredDropdownItems.length;
  const showNoItemsFound = focused && !filteredDropdownItems.length;

  const inputPlaceholder = hasInputItems ? "" : placeholder;

  const onFocus = () => {
    setState((prevState) => ({
      ...prevState,
      placeholder: "",
      focused: true,
    }));
  };

  const onBlur = async () => {
    await timeout(250);
    setState((prevState) => ({
      ...prevState,
      placeholder: initialState.placeholder,
      focused: false,
    }));
  };

  const onDropdownItemClick = (item) => {
    setState((prevState) => ({
      ...prevState,
      ...addElement(prevState, item),
    }));
  };

  const onInputItemClick = (item) => {
    setState((prevState) => ({
      ...prevState,
      ...removeElement(prevState, item),
    }));
  };

  const onInputChange = ({ target: { value } }) => {
    setState((prevState) => ({
      ...prevState,
      inputValue: value,
    }));
  };

  const onKeyDown = ({ code }) => {
    const currentIndex = dropdownItems.findIndex(({ value }) => {
      if (!hoveredItem) {
        return false;
      }
      return value === hoveredItem["value"];
    });
    const isEnter = code === keyCodes.Enter || code === keyCodes.NumpadEnter;
    const isEscape = code === keyCodes.Escape;

    if (isEnter && hoveredItem) {
      return onDropdownItemClick(hoveredItem);
    } else if (isEscape && hoveredItem) {
      return setState((prevState) => ({
        ...prevState,
        hoveredItem: null,
        focused: false,
      }));
    }

    const nextIndex = setNext(currentIndex, dropdownItems, code, hoveredItem);

    setState((prevState) => ({
      ...prevState,
      hoveredItem: dropdownItems[nextIndex],
    }));
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      filteredDropdownItems: prevState.dropdownItems.filter((dropdownItem) => {
        if (!inputValue) {
          return true;
        }

        const inputMatch =
          dropdownItem.label.toLowerCase().indexOf(inputValue.toLowerCase()) >
          -1;

        return inputMatch;
      }),
    }));
  }, [inputValue, focused, dropdownItems.length]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      hoveredItem: null,
    }));
  }, [dropdownItems.length]);

  return (
    <MultiSelectWrapper>
      <Input
        onKeyDown={onKeyDown}
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
      {showDropdownItems && (
        <>
          <i className="fas fa-caret-down"></i>
          <DropdownItems
            hoveredItem={hoveredItem}
            inputValue={inputValue}
            onDropdownItemClick={onDropdownItemClick}
            dropdownItems={filteredDropdownItems}
          />
        </>
      )}
      {showNoItemsFound ? "No items found" : ""}
    </MultiSelectWrapper>
  );
}
