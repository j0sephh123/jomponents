const DropdownItem = ({ item, onDropdownItemClick }) => {
  const { label, value } = item;

  return (
    <div onClick={() => onDropdownItemClick(value)} className="dropdownItem">
      {label}
    </div>
  );
};

export default DropdownItem;
