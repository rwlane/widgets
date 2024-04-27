import type { Meta, StoryObj } from '@storybook/react';

import { RedButton } from './RedButton';

const meta: Meta<typeof RedButton> = {
  component: RedButton
}

export default meta;

type Story = StoryObj<typeof RedButton>;

export const Default: Story = {
  args: {
    children: 'Red Click Me!'
  }
}

export const DifferentText: Story = {
  args: {
    children: 'Red Help Me!'
  }
}
