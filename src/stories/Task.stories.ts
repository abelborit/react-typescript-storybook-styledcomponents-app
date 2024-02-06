/* Imports */
import { Meta, StoryObj } from "@storybook/react";
import { Task } from "../components/Task";

/* Meta */
const meta = {
  title: "Guide_Storybook/Task",
  component: Task,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Task>;
export default meta;

/* Story */
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /* Args */
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
