import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useClickOutside } from '../hooks/useClickOutside';

export function Popover(props: { trigger: JSX.Element; surface: JSX.Element }) {
  const { trigger, surface } = props;
  const [aberto, setAberto] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    setAberto(!aberto);
  }

  function handleClickOutside() {
    setAberto(false);
  }

  useClickOutside(ref, handleClickOutside, aberto);

  return (
    <Container ref={ref}>
      <Trigger onClick={handleClick}>{trigger}</Trigger>
      {aberto ? <Surface>{surface}</Surface> : null}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
const Trigger = styled.div``;
const Surface = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
`;
