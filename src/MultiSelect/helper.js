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
