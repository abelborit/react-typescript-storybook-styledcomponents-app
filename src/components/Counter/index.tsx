import { useEffect, useState } from "react";
import { CounterProps } from "./interfaces";
import { ButtonResetStyled, ButtonStyled, ContainerStyled } from "./styles";

export const Counter = ({
  counterInitialValue,
  increaseValueBy,
}: CounterProps) => {
  const [counterState, setCounterState] = useState(counterInitialValue);

  useEffect(() => {
    console.log("Counter useEffect render");
  }, []);

  const handleIncreaseBy = (value: number) => {
    setCounterState((prevState) => prevState + value);
  };

  const handleReset = () => {
    setCounterState(0);
  };

  return (
    <ContainerStyled>
      <p>Este es un componente de contador</p>
      {/* El atributo aria-label no está bien soportado en un elemento <p> sin un atributo de rol válido. */}
      {/* <p aria-label="counterState">
        <b>Counter: </b> {counterState}
      </p> */}

      {/* Una alternativa común es utilizar un atributo data-testid para identificar la etiqueta <p> en el componente y luego seleccionarla en las pruebas unitarias. */}
      <p data-testid="counterState">
        <b>Counter: </b> {counterState}
      </p>

      <ButtonStyled
        onClick={() => handleIncreaseBy(increaseValueBy)}
        aria-label="increaseButton"
      >
        +{increaseValueBy}
      </ButtonStyled>

      <ButtonResetStyled
        onClick={handleReset}
        disabled={counterState == 0}
        aria-label="resetButton"
      >
        Reset
      </ButtonResetStyled>

      <ButtonStyled
        onClick={() => handleIncreaseBy(-increaseValueBy)}
        aria-label="decreaseButton"
      >
        -{increaseValueBy}
      </ButtonStyled>
    </ContainerStyled>
  );
};
