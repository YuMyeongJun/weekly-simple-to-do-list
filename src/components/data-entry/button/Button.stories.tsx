import { Meta, StoryObj } from "@storybook/react";

import { IButtonProps } from "./Button.types";
import { Button } from "@components";

const meta: Meta<IButtonProps> = {
  title: "components/data-entry/Button/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<IButtonProps>;

export const Default: Story = {
  render: ({ ...args }) => {
    return <Button {...args}>{args.children}</Button>;
  },
  args: {
    children: "Default",
  },
};
