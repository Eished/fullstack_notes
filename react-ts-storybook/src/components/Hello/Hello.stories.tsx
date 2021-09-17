import React from 'react'
// import { Meta } from '@storybook/react/types-6-0'
// import { Story } from '@storybook/react'
import { Story, Meta } from '@storybook/react'
import Hello, { HelloProps } from './Hello'

export default {
  title: 'Components/Hello',
  component: Hello,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
} as Meta

// Create a master template for mapping args to render the Hello component
const Template: Story<HelloProps> = (args) => <Hello {...args} />

// Reuse that template for creating different stories
export const Primary = Template.bind({})
Primary.args = { name: 'Primary 😃', enthusiasmLevel: 1 }

export const Secondary = Template.bind({})
Secondary.args = { name: 'Primary 😃', enthusiasmLevel: 3 }

Primary.storyName = 'This is my new name!'
