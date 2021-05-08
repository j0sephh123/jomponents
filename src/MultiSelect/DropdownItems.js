import DropdownItem from "./DropdownItem";

const DropdownItems = ({ items }) => {
  const onDropdownItemClick = (value) => {
    console.log(value);
  };

  return (
    <div className="dropdownItems">
      {items.map((item, index) => (
        <DropdownItem
          onDropdownItemClick={onDropdownItemClick}
          key={index}
          item={item}
        />
      ))}
    </div>
  );
};

export default DropdownItems;
