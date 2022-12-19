import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  input:checked + label:before {
    right: 0;
  }

  label {
    width: 24px;
    height: 12px;
    background: #dddddd;
    display: inline-block;
    border-radius: 12px;
    cursor: pointer;
    position: relative;

    &:before {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #b5b5b5;
      display: inline-block;
      transform: scale(90%);
      position: absolute;
      transition: all 100ms ease-in;
      right: 12px;
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
