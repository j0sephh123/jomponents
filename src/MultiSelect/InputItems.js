import { InputItem } from "./";

export default function InputItems({ onInputItemClick, inputItems }) {
  console.log("render");

  return (
    <div className="inputItems">
      {inputItems.map((inputItem) => (
        <InputItem onInputItemClick={onInputItemClick} key={inputItem.value} inputItem={inputItem} />
      ))}
    </div>
  );
}
