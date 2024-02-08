import { Task } from "../components/Task";
/* Meta */
const meta = {
    title: "Guide_Storybook/Task",
    component: Task,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    /* Args */
    args: {
        task: {
            id: "1",
            title: "Test Task",
            state: "TASK_INBOX",
        },
    },
};
export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: "TASK_PINNED",
        },
    },
};
export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: "TASK_ARCHIVED",
        },
    },
};
