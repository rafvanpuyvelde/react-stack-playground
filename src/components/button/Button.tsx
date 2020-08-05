import styled from "styled-components";

interface IButtonProps {
  primary: boolean;
}

const Button = styled.button<IButtonProps>`
  border: 1px solid black;
  color: ${(props) => (props.primary ? "red" : "blue")};
`;

export default Button;
