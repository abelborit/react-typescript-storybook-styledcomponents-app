import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ButtonResetStyled, ButtonStyled, ContainerStyled } from "./styles";
export const Counter = ({ counterInitialValue, increaseValueBy, }) => {
    const [counterState, setCounterState] = useState(counterInitialValue);
    useEffect(() => {
        console.log("Counter useEffect render");
    }, []);
    const handleIncreaseBy = (value) => {
        setCounterState((prevState) => prevState + value);
    };
    const handleReset = () => {
        setCounterState(0);
    };
    return (_jsxs(ContainerStyled, { children: [_jsx("p", { children: "Este es un componente de contador" }), _jsxs("p", { children: [_jsx("b", { children: "Counter: " }), " ", counterState] }), _jsx(ButtonStyled, { onClick: () => handleIncreaseBy(increaseValueBy), children: "+1" }), _jsx(ButtonResetStyled, { onClick: handleReset, disabled: counterState == 0, children: "Reset" }), _jsx(ButtonStyled, { onClick: () => handleIncreaseBy(-increaseValueBy), children: "-1" })] }));
};
