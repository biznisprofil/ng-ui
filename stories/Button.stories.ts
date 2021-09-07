import { Meta, Story } from '@storybook/angular';

import { PrimaryButtonComponent } from 'projects/primary-button/src/lib/primary-button.component';

export default {
  title: 'Libraries/ButtonContainer',
  component: PrimaryButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<PrimaryButtonComponent> = (args: PrimaryButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'button',
  disabled: true,
};
