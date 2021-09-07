import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { PrimaryButtonModule } from 'projects/primary-button/src/public-api';
import { TaskComponent } from 'projects/web-todo-app/src/app/components/task/task.component';
import { action } from '@storybook/addon-actions';

export default {
  component: TaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule, PrimaryButtonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'WebPages/TodoList',
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<TaskComponent> = args => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
