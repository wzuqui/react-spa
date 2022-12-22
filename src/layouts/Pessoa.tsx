import { styled } from '@stitches/react';
import { Avatar } from '../components/Avatar';

import { View } from '../components/View';

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
      <Avatar src={foto} alt={nome} />
      <View column alignItems="flexStart">
        <b>{nome}</b>
        <div>{empresa}</div>
      </View>
    </Container>
  );
}

const Container = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  height: '100%',
  justifyContent: 'space-between',
  overflow: 'auto',
  padding: '4px 8px',
});
