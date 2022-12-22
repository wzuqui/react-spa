import * as Popover from '@radix-ui/react-popover';
import { styled } from '@stitches/react';

import MudarSvg from '../assets/mudar.svg';
import SairSvg from '../assets/sair.svg';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { Image } from '../components/Image';
import { Switch } from '../components/Switch';
import { Text } from '../components/Text';
import { View } from '../components/View';
import { Pessoa } from '../layouts/Pessoa';

export function Perfil() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Pessoa
          empresa="Empresa"
          foto="https://github.com/wzuqui.png"
          nome="Willian Luis Zuqui"
          style={{
            height: '40px',
            cursor: 'pointer',
            fontSize: 12,
          }}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Overlay>
            <Avatar
              alt="Foto"
              height={48}
              src="https://github.com/wzuqui.png"
              width={48}
            />
            <View
              alignItems="flexStart"
              column
              gap="4px"
            >
              <Text bold>Willian Luis Zuqui</Text>
              <Text>willianluiszuqui@gmail.com</Text>
              <View gap="8px">
                <Text bold>Empresa</Text>
                <Button
                  title="Mudar unidade"
                  transparent
                >
                  <Image
                    alt="Mudar unidade"
                    src={MudarSvg}
                    width={16}
                    height={16}
                  />
                  <Text>mudar unidade</Text>
                </Button>
              </View>
              <View gap="8px">
                <Text bold>Modo escuro</Text>
                <Switch title="Alterar tema" />
              </View>
              <Button
                title="Sair"
                transparent
                color="red"
              >
                <Image
                  alt="Sair"
                  height={16}
                  src={SairSvg}
                  width={16}
                />
                <Text bold>Sair</Text>
              </Button>
            </View>
          </Overlay>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

const Overlay = styled(View, {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  backgroundColor: '#fff',
  gap: '8px',
  padding: '8px 16px',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.25)',
});
