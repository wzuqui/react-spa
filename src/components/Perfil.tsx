import styled from 'styled-components';
import { Button } from './Button';
import { ButtonSwitch } from './ButtonSwitch';
import { Pessoa } from './Pessoa';
import { Popover } from './Popover';
import { Text } from './Text';
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
      surface={<PerfilOverlay />}
    ></Popover>
  );
}

function PerfilOverlay() {
  return (
    <PerfilOverlayContainer>
      <span>Willian Luis Zuqui</span>
      <span>willianluiszuqui@gmail.com</span>
      <span>Empresa</span>
      <Button title="Mudar unidade">
        <img src="MudarSvg" alt="Mudar unidade" />
        <Text>mudar unidade</Text>
      </Button>
      <View>
        <Text>Modo escuro</Text>
        <ButtonSwitch />
      </View>
    </PerfilOverlayContainer>
  );
}

const PerfilOverlayContainer = styled(View)`
  background-color: #fff;
`;
