export default function DropdownItem({
  dropdownItem,
  onDropdownItemClick,
  hoveredItem,
}) {
  const { label, value } = dropdownItem;

  const isHovered = hoveredItem && hoveredItem["value"] === value;

  return (
    <div
      onClick={() => onDropdownItemClick(dropdownItem)}
      className={`dropdownItem${isHovered ? " hovered" : ""}`}
    >
      {label}
    </div>
  );
}
