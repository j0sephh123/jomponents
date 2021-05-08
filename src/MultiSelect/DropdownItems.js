import DropdownItem from "./DropdownItem";

export default function DropdownItems({ onDropdownItemClick, dropdownItems }) {
  return (
    <div className="dropdownItems">
      {dropdownItems.map((dropdownItem, index) => (
        <DropdownItem
          onDropdownItemClick={onDropdownItemClick}
          key={index}
          dropdownItem={dropdownItem}
        />
      ))}
    </div>
  );
}
