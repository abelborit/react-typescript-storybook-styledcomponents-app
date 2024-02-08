import { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./index";
import { mockCounterValueProps } from "./Counter.mock";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "My_Examples/Counter",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    // layout: "centered",
  },
  /* "argTypes" para realizar configuraciones a los argumentos: https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations */
  argTypes: {},
} satisfies Meta<typeof Counter>;
export default meta;

type Story = StoryObj<typeof meta>;

/* darse cuenta que comienza con mayúscula */
export const CounterValue0: Story = {
  args: {
    ...mockCounterValueProps.counterValue0,
  },

  /* Las funciones play son pequeños fragmentos de código ejecutados después de que se renderiza la historia. Permitiéndole interactuar con sus componentes y probar escenarios que de otro modo requerirían la intervención del usuario. Cuando Storybook termina de renderizar la historia, ejecuta los pasos definidos dentro de la función play, interactuando con el componente y todo ello sin necesidad de intervención del usuario. Si se revisa el panel Interactions se verá el flujo paso a paso. */
  /* Sin la ayuda de la función play y @storybook/addon-interactions, se tendría que escribir nuestras propias historias e interactuar manualmente con el componente para probar cada escenario de caso de uso posible. */
  play: async ({ canvasElement }) => {
    // console.log({ canvasElement });

    /* Asigna canvas al elemento raíz del componente para que a partir de él se puedan ir haciendo las pruebas */
    const canvas = within(canvasElement);

    /* usar getByLabelText para seleccionar un elemento del DOM que tiene el atributo aria-label="increaseButton" y como opciones tendrá selector: "button", y darse cuenta que el getByLabelText tiene el tipo de HTMLElement */
    const increaseButton = canvas.getByLabelText<HTMLElement>(
      "increaseButton",
      {
        selector: "button",
      }
    );
    // console.log(increaseButton);

    const decreaseButton = canvas.getByLabelText<HTMLElement>(
      "decreaseButton",
      {
        selector: "button",
      }
    );
    // console.log(decreaseButton);

    const resetButton = canvas.getByLabelText<HTMLElement>("resetButton", {
      selector: "button",
    });
    // console.log(resetButton);

    const counterState = canvas.getByTestId<HTMLElement>("counterState");
    // console.log(counterState);

    await expect(increaseButton).toBeInTheDocument();
    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);

    // Verifica que el texto contenido dentro del elemento <p> contenga un "1"
    await expect(counterState.textContent).toContain("2");

    await userEvent.click(decreaseButton);
    await expect(counterState.textContent).toContain("1");

    await userEvent.click(resetButton);
    await expect(counterState.textContent).toContain("0");
  },
};

export const CounterValue10: Story = {
  args: {
    ...mockCounterValueProps.counterValue10,
  },
};

export const CounterValue20: Story = {
  args: {
    ...mockCounterValueProps.counterValue20,
  },
};
