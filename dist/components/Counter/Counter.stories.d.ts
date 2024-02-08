import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ counterInitialValue, increaseValueBy, }: import("./interfaces").CounterProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {};
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CounterValue0: Story;
export declare const CounterValue10: Story;
export declare const CounterValue20: Story;
