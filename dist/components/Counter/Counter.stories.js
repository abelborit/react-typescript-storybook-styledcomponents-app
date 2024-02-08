import { Counter } from "./index";
import { mockCounterValueProps } from "./Counter.mock";
const meta = {
    title: "My_Examples/Counter",
    component: Counter,
    tags: ["autodocs"],
    parameters: {
    // layout: "centered",
    },
    /* "argTypes" para realizar configuraciones a los argumentos: https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations */
    argTypes: {},
};
export default meta;
/* darse cuenta que comienza con mayúscula */
export const CounterValue0 = {
    args: {
        ...mockCounterValueProps.counterValue0,
    },
};
export const CounterValue10 = {
    args: {
        ...mockCounterValueProps.counterValue10,
    },
};
export const CounterValue20 = {
    args: {
        ...mockCounterValueProps.counterValue20,
    },
};
