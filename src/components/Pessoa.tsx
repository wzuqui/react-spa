import styled from 'styled-components';
import { View } from './View';

interface PessoaProps {
  nome: string;
  empresa: string;
  foto: string;
  style?: React.CSSProperties;
}

export function Pessoa(props: PessoaProps) {
  const { nome, empresa, foto } = props;

  return (
    <Container style={props.style}>
      <Image src={foto} alt={nome} height="100%" />
      <View column style={{ alignItems: 'flex-start' }}>
        <b>{nome}</b>
        <div>{empresa}</div>
      </View>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  overflow: auto;
  height: 100%;
  gap: 8px;

  padding: 4px 8px;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 50%;
`;
