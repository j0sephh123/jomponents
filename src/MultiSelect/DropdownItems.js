import DropdownItem from "./DropdownItem";

export default function DropdownItems({
  inputValue,
  onDropdownItemClick,
  dropdownItems,
}) {
  let filteredDropdownItems;

  if (inputValue) {
    filteredDropdownItems = dropdownItems.filter(({ label }) => {
      if (!inputValue) return false;

      return label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
  } else {
    filteredDropdownItems = dropdownItems;
  }

  return (
    <div className="dropdownItems">
      {filteredDropdownItems.map((dropdownItem, index) => (
        <DropdownItem
          onDropdownItemClick={onDropdownItemClick}
          key={index}
          dropdownItem={dropdownItem}
        />
      ))}
    </div>
  );
}
