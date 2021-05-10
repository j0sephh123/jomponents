import DropdownItem from "./DropdownItem";

export default function DropdownItems({ dropdownItems, ...rest }) {
  return (
    <div className="dropdownItems">
      {dropdownItems.map((dropdownItem, index) => (
        <DropdownItem
          {...rest}
          key={index}
          dropdownItem={dropdownItem}
        />
      ))}
    </div>
  );
}
