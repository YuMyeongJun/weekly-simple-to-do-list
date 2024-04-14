import { Meta, StoryObj } from "@storybook/react";

import { ICheckboxProps } from "./Checkbox.types";
import { Checkbox } from "./Checkbox";

const meta: Meta = {
  title: "components/data-entry/Checkbox/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ICheckboxProps>;

export const Default: Story = {
  render: (args) => {
    return (
      <div>
        <Checkbox {...args} />
      </div>
    );
  },
  args: {
    checked: false,
    defaultChecked: false,
    disabled: false,
    label: "라벨",
    subLabel: "서브라벨",
    name: "testCheckbox",
  },
};
