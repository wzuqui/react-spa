import styled from 'styled-components';

import FecharSvg from '../assets/fechar.svg';

interface AbaProps {
  ativa: boolean;
  fixo: boolean;
  icone: string;
  rota: string;
  titulo: string;
  acaoAtivar?: (rota: string) => void;
  acaoFechar?: (rota: string) => void;
}

const Container = styled.div`
  height: 40px;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Content = styled.div`
  width: 100%;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Item = styled.div<{ ativa: boolean; fixo: boolean }>`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 4px 8px;
  cursor: pointer;

  background: transparent;
  border: 1px solid #5753b6;
  border-radius: 8px 8px 0px 0px;

  ${(props) =>
    props.ativa && {
      background: '#fff',
      borderBottom: '1px solid #fff',
    }}

  ${(props) =>
    props.fixo && {
      width: '40px',
      justifyContent: 'center',
    }}

  .button {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    background: transparent;
    border: none;
    font-size: 14px;
  }

  .button.fechar img {
    margin-left: 8px;
    height: 10px;
    width: 10px;
  }

  img {
    height: 16px;
    width: 16px;
  }
`;

export function Aba(props: AbaProps) {
  const { ativa, fixo, icone, rota, titulo } = props;

  function handleClick() {
    if (props.acaoAtivar) {
      props.acaoAtivar(rota);
    }
  }

  function handleFechar() {
    if (props.acaoFechar) {
      props.acaoFechar(rota);
    }
  }

  return (
    <Container>
      <Content>
        <Item title={titulo} ativa={ativa} fixo={fixo}>
          <div className="button aba" title={titulo} onClick={handleClick}>
            <img alt={titulo} src={icone} />
            {fixo === false && <span className="titulo">{titulo}</span>}
          </div>
          {fixo === false && (
            <div
              className="button fechar"
              title="Fechar"
              onClick={handleFechar}
            >
              <img alt="Fechar" src={FecharSvg} />
            </div>
          )}
        </Item>
      </Content>
    </Container>
  );
}
