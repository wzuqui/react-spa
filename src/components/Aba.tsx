import FecharSvg from '../assets/fechar.svg';
import { Rotas } from '../shared/rotas';
import { styled } from '../styled';

interface AbaProps {
  ativa: boolean;
  fixo: boolean;
  icone: string;
  rota: Rotas;
  titulo: string;
  acaoAtivar?: (rota: Rotas) => void;
  acaoFechar?: (rota: Rotas) => void;
}

export function Aba(props: AbaProps) {
  const { ativa, fixo, icone, rota, titulo } = props;

  function handleClick() {
    if (props.acaoAtivar) {
      props.acaoAtivar(rota);
    }
  }

  function handleFechar(evento: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    evento.stopPropagation();

    if (props.acaoFechar) {
      props.acaoFechar(rota);
    }
  }

  return (
    <Container>
      <Content
        className="item"
        onClick={handleClick}
      >
        <Item
          ativa={ativa}
          fixo={fixo}
          title={titulo}
        >
          <Button title={titulo}>
            <img
              alt={titulo}
              src={icone}
            />
            {fixo === false && <Titulo>{titulo}</Titulo>}
          </Button>
          {fixo === false && (
            <Fechar
              onClick={handleFechar}
              tabIndex={0}
              title="Fechar"
            >
              <img
                alt="Fechar"
                src={FecharSvg}
              />
            </Fechar>
          )}
        </Item>
      </Content>
    </Container>
  );
}

const Container = styled('div', {
  height: '40px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
});

const Content = styled('div', {
  width: '100%',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

const Item = styled('button', {
  display: 'flex',
  alignItems: 'center',
  height: '36px',
  padding: '4px 8px',
  cursor: 'pointer',

  background: 'transparent',
  border: '1px solid #5753b6',
  borderRadius: '8px 8px 0px 0px',

  variants: {
    ativa: {
      true: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #fff',
      },
    },
    fixo: {
      true: {
        width: '40px',
        justifyContent: 'center',
      },
    },
  },
});

const Titulo = styled('span', {
  display: 'flex',
  flexShrink: '0',
});

const Button = styled('div', {
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '14px',
  gap: '4px',

  img: {
    height: '16px',
    width: '16px',
  },
});

const Fechar = styled(Button, {
  marginLeft: 16,
  img: {
    height: '10px',
    width: '10px',
  },
});
