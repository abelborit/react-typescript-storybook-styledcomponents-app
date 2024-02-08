import styled, { css } from "styled-components";
export const ContainerStyled = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const BaseButton = styled.button `
  max-width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #333;
  color: #333;
  cursor: pointer;
`;
export const ButtonStyled = styled(BaseButton) `
  background-color: "#00d";
`;
export const ButtonResetStyled = styled(BaseButton) `
  background-color: ${({ disabled }) => (disabled ? "#666" : "#d00")};
  color: #fff;
  ${(props) => {
    if (props.disabled) {
        return css `
        cursor: not-allowed;
      `;
    }
}}
`;
