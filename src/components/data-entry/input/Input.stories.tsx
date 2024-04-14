import { IcSearch } from '@assets/icons';
import { Input } from '@components/data-entry/input/Input';
import { Meta, StoryObj } from '@storybook/react';

import { IInputProps } from './Input.types';

const meta: Meta = {
  title: 'components/data-entry/Input/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '입력창',
    docs: {
      source: {
        type: 'code',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IInputProps>;

export const Default: Story = {
  render: (args) => {
    return <Input {...args} />;
  },
  args: {
    // showCount: true,
    isError: false,
    // isSearch: true,
    // isClearable: true,
    // isShowAlwaysClear: true,
    // customPrefix: '$',
    // suffix: 'USD',
    placeholder: '입력해주세요',
    disabled: false,
    customPrefix: <IcSearch />,
  },
};
