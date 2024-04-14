import { Meta, StoryObj } from "@storybook/react";

import { ISliderProps, Slider } from "@components";

const meta: Meta<ISliderProps> = {
  title: "components/data-display/Slider/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ISliderProps>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <Slider className="w-[500px]" {...args}>
        <div className="min-h-24 text-sm bg-[var(--weekly-primary-color-main)]">
          test01
        </div>
        <div className="min-h-24 text-sm bg-[var(--weekly-primary-color-light)]">
          test02
        </div>
        <div className="min-h-24 text-sm bg-[var(--weekly-primary-color-dark)]">
          test03
        </div>
        <div className="min-h-24 text-sm bg-[var(--weekly-error-color-main)]">
          test04
        </div>
        <div className="min-h-24 text-sm bg-[var(--weekly-error-color-light)]">
          test05
        </div>
        <div className="min-h-24 text-sm bg-[var(--weekly-error-color-dark)]">
          test06
        </div>
      </Slider>
    );
  },
  args: {
    index: 0,
    limit: 2,
    width: 300,
    gap: 5,
  },
};
