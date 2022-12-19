import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  input:checked + label:before {
    right: 0;
  }

  label {
    width: 26px;
    height: 14px;
    background: #dddddd;
    display: inline-block;
    border-radius: 14px;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #b5b5b5;
      display: inline-block;
      transform: scale(90%);
      position: absolute;
      transition: all 100ms ease-in;
      right: 14px;
    }
  }
`;

export function ButtonSwitch(props: {
  checked?: boolean;
  title?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const id = `${Date.now()}`;
  const [checked, setChecked] = useState(true);

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <Container>
      <input
        checked={checked}
        id={id}
        onChange={handleChange}
        title={props.title}
        type="checkbox"
      ></input>
      <label htmlFor={id}></label>
    </Container>
  );
}
