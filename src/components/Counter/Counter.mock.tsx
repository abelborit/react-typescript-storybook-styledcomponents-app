import { CounterProps } from "./interfaces";

/* darse cuenta que comienza con minúscula */
const counterValue0: CounterProps = {
  counterInitialValue: 0,
  increaseValueBy: 1,
};

const counterValue10: CounterProps = {
  counterInitialValue: 20,
  increaseValueBy: 2,
};

const counterValue20: CounterProps = {
  counterInitialValue: 20,
  increaseValueBy: 3,
};

export const mockCounterValueProps = {
  counterValue0,
  counterValue10,
  counterValue20,
};
