import MultiSelect from "../MultiSelect/MultiSelect";

const items = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Blue", value: "blue" },
  { label: "Orange", value: "orange" },
  { label: "Purple", value: "purple" },
  { label: "White", value: "white" },
  { label: "Black", value: "black" },
];

export default {
  title: "MultiSelect",
  component: MultiSelect,
};

const Template = (args) => <MultiSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items,
};
