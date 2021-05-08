export default function DropdownItem ({ dropdownItem, onDropdownItemClick }) {
  const { label, value } = dropdownItem;

  return (
    <div onClick={() => onDropdownItemClick(dropdownItem)} className="dropdownItem">
      {label}
    </div>
  );
};
