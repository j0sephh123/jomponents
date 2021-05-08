export default function InputItem({ onInputItemClick, inputItem }) {
  const { value, label } = inputItem;
  return (
    <div 
      onClick={() => onInputItemClick(inputItem)}
      className="inputItem" key={value}>
      {label}
    </div>
  );
}
