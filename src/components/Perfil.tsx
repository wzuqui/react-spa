import styled from 'styled-components';
import MudarSvg from '../assets/mudar.svg';
import SairSvg from '../assets/sair.svg';
import { Button } from './Button';
import { ButtonSwitch } from './ButtonSwitch';
import { Pessoa } from './Pessoa';
import { Popover } from './Popover';
import { View } from './View';

export function Perfil() {
  return (
    <Popover
      trigger={
        <Button transparent title="Perfil">
          <Pessoa
            nome="Willian Luis Zuqui"
            empresa="Empresa"
            foto="https://github.com/wzuqui.png"
            style={{
              height: '40px',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          />
        </Button>
      }
      overlayPosition="right"
      overlay={<PerfilOverlay />}
    ></Popover>
  );
}

export function PerfilOverlay() {
  return (
    <PerfilOverlayContainer>
      <div>
        <img className="foto" src="https://github.com/wzuqui.png" alt="Foto" />
      </div>
      <div className="descricao">
        <b className="nome">Willian Luis Zuqui</b>
        <div className="email">willianluiszuqui@gmail.com</div>
        <div className="empresa">
          <b>Empresa</b>
          <Button
            className="botao-mudar-unidade"
            transparent
            title="Mudar unidade"
          >
            <img src={MudarSvg} alt="Mudar unidade" />
            <div>mudar unidade</div>
          </Button>
        </div>
        <div className="alterar-tema">
          <span>Modo escuro</span>
          <ButtonSwitch />
        </div>
        <Button className="botao-sair" transparent title="Sair">
          <img src={SairSvg} alt="Sair" />
          <div>Sair</div>
        </Button>
      </div>
    </PerfilOverlayContainer>
  );
}

const PerfilOverlayContainer = styled(View)`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;

  background-color: #fff;
  font-size: 14px;
  gap: 8px;
  padding: 8px 16px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);

  .foto {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  > .descricao {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > .empresa {
      display: flex;
      gap: 8px;

      margin-top: 8px;
      margin-bottom: 8px;

      > .botao-mudar-unidade img {
        width: 16px;
        height: 16px;
      }
    }

    > .alterar-tema {
      display: flex;
      gap: 8px;
      font-weight: bold;
    }

    > .botao-sair {
      margin-top: 8px;
      margin-bottom: 8px;

      color: #d21c1c;
      font-weight: bold;

      > img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
