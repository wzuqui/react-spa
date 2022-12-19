import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useClickOutside } from '../hooks/useClickOutside';

interface PopoverProps {
  trigger: JSX.Element;
  overlay: JSX.Element;
  overlayPosition?: 'right';
}

export function Popover(props: PopoverProps) {
  const { trigger, overlay, overlayPosition } = props;
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
      {aberto ? <Overlay position={overlayPosition}>{overlay}</Overlay> : null}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Trigger = styled.div``;

const Overlay = styled.div<{ position?: 'right' }>`
  position: absolute;
  margin: 0;
  padding: 0;
  ${(props) => (props.position ? { right: '0px' } : null)}
`;
