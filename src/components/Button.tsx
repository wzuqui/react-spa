import styled from 'styled-components';

interface ButtonProps {
  transparent?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.transparent && {
      border: '0',
      background: 'transparent',
    }}
`;
