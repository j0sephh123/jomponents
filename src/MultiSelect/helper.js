export function swapArrayEl(arrayToRemoveFrom, arrayToAddTo, el) {
  const arrayToAddCopy = [...arrayToAddTo];

  const filteredArrayToRemoveFrom = arrayToRemoveFrom.filter((item) => {
    const bool = item.value !== el.value;
    console.log(bool);

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
