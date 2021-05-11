import { keyCodes } from "./constants";

export function addElement(prevState, item) {
  const { filteredArrayToRemoveFrom, arrayToAddCopy } = swapArrayEl(
    prevState.dropdownItems,
    prevState.inputItems,
    item
  );

  return {
    dropdownItems: filteredArrayToRemoveFrom,
    inputItems: arrayToAddCopy,
  };
}

export function removeElement(prevState, item) {
  const { filteredArrayToRemoveFrom, arrayToAddCopy } = swapArrayEl(
    prevState.inputItems,
    prevState.dropdownItems,
    item
  );

  return {
    dropdownItems: arrayToAddCopy,
    inputItems: filteredArrayToRemoveFrom,
  };
}

export function swapArrayEl(arrayToRemoveFrom, arrayToAddTo, el) {
  const arrayToAddCopy = [...arrayToAddTo];

  const filteredArrayToRemoveFrom = arrayToRemoveFrom.filter((item) => {
    const bool = item.value !== el.value;

    if (!bool) {
      arrayToAddCopy.push(el);
    }

    return bool;
  });

  return {
    filteredArrayToRemoveFrom,
    arrayToAddCopy,
  };
}

export const timeout = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const incrementOrDecrement = (v, code) =>
  code === keyCodes.ArrowDown ? v + 1 : v - 1;

export const setNext = (currentIndex, dropdownItems, code, hoveredItem) => {
  const isArrowDown = code === keyCodes.ArrowDown;

  const lastIndex = isArrowDown ? dropdownItems.length : -1;

  let nextIndex = incrementOrDecrement(currentIndex, code);

  if (nextIndex === lastIndex || !hoveredItem) {
    nextIndex = isArrowDown ? 0 : dropdownItems.length - 1;
  }

  return nextIndex;
};
