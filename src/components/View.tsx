import styled from 'styled-components';

export const View = styled.div<{ column?: boolean; gap?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.column && { flexDirection: 'column' }}
  ${(props) => props.gap && { gap: props.gap }}
`;
