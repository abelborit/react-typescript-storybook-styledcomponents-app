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
      <p>
        <b>Counter: </b> {counterState}
      </p>

      <ButtonStyled onClick={() => handleIncreaseBy(increaseValueBy)}>
        +1
      </ButtonStyled>

      <ButtonResetStyled onClick={handleReset} disabled={counterState == 0}>
        Reset
      </ButtonResetStyled>

      <ButtonStyled onClick={() => handleIncreaseBy(-increaseValueBy)}>
        -1
      </ButtonStyled>
    </ContainerStyled>
  );
};
