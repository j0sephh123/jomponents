import MultiSelect from "../MultiSelect/MultiSelect";
import { dropdownItems } from "../App";

export default {
  title: "MultiSelect",
  component: MultiSelect,
};

const Template = (args) => <MultiSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dropdownItems,
  focused: false,
};

export const Focused = Template.bind({});
Focused.args = {
  dropdownItems,
  focused: true,
};

export const WithInput = Template.bind({});
WithInput.args = {
  dropdownItems,
  focused: true,
  inputValue: "red",
};
