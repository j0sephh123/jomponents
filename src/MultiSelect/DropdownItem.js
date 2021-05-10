export default function DropdownItem({
  dropdownItem,
  onDropdownItemClick,
  hoveredItem,
}) {
  const { label, value } = dropdownItem;

  const isHovered = hoveredItem === value;

  return (
    <div
      onClick={() => onDropdownItemClick(dropdownItem)}
      className={`dropdownItem${isHovered ? " hovered" : ""}`}
    >
      {label}
    </div>
  );
}
