import MultiSelect from "./MultiSelect/MultiSelect";

export const dropdownItems = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Blue", value: "blue" },
  { label: "Orange", value: "orange" },
  { label: "Purple", value: "purple" },
  { label: "White", value: "white" },
  { label: "Black", value: "black" },
];

function App() {
  return (
    <div className="container">
      <MultiSelect focused={false} dropdownItems={dropdownItems} />
    </div>
  );
}

export default App;
