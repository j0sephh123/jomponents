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
  code === "ArrowDown" ? v + 1 : v - 1;

export const setNext = (dropdownItems, code, hoveredItem) => {
  const isArrowDown = code === "ArrowDown";

  const currentIndex = dropdownItems.findIndex(
    ({ value }) => value === hoveredItem
  );
  // 0
  const lastIndex = isArrowDown ? dropdownItems.length : -1;

  // currentIndex - 1
  let nextIndex = incrementOrDecrement(currentIndex, code);

  if (nextIndex === lastIndex || !hoveredItem) {
    // prevState.dropdownItems.length
    nextIndex = isArrowDown ? 0 : dropdownItems.length - 1;
  }

  return nextIndex;
  // return code === "ArrowDown" ? currentIndex - 1 : currentIndex + 1;
};
