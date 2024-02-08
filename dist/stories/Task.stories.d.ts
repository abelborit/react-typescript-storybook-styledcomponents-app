import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ task: { id, title, state }, onArchiveTask, onPinTask, }: import("../components/Task").TaskProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Pinned: Story;
export declare const Archived: Story;
