import MultiSelect from "./MultiSelect/MultiSelect";

const items = [
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
      <MultiSelect items={items} />
    </div>
  );
}

export default App;
