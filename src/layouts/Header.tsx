import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Aba } from '../components/Aba';
import { ButtonLogo } from '../components/ButtonLogo';
import { ButtonMenu } from '../components/ButtonMenu';
import { Menu } from '../components/Menu';
import { View } from '../components/View';
import { Perfil } from '../layouts/Perfil';
import { Abas } from '../shared/abas';

export function Header() {
  const [abas, setAbas] = useState(Abas);
  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const rota = location.pathname.replace(/^\//g, '');
    setAbas(abas => {
      return abas.map(p => ({
        ...p,
        ativa: p.rota === rota,
      }));
    });
  }, [location]);

  function acaoAbrir(rota: string) {
    setAberto(false);
    setAbas(abas => {
      navigate(rota);
      return abas.map(p => ({
        ...p,
        ativa: p.rota === rota,
      }));
    });
  }

  function handleAtivarAba(rota: string) {
    setAbas(abas => {
      navigate(rota);
      return abas.map(p => ({
        ...p,
        ativa: p.rota === rota,
      }));
    });
  }

  function handleButtonMenu(
    evento: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evento.stopPropagation();
    setAberto(!aberto);
  }

  function handleFecharAba(rota: string) {
    // TODO logica completa
    setAbas(abas.filter(p => p.rota !== rota));
  }

  return (
    <Container>
      <View gap="8px">
        <ButtonMenu onClick={handleButtonMenu} />
        <ButtonLogo />
        <View
          style={{
            overflow: 'hidden',
            marginBottom: '-1px',
          }}
        >
          {abas.map(p => (
            <Aba
              key={p.rota}
              acaoAtivar={p => handleAtivarAba(p)}
              acaoFechar={p => handleFecharAba(p)}
              ativa={p.ativa}
              fixo={p.fixo}
              icone={p.icone}
              rota={p.rota}
              titulo={p.titulo}
            />
          ))}
        </View>
      </View>
      <View>
        <Perfil />
      </View>
      <Menu
        aberto={aberto}
        acaoAbrir={acaoAbrir}
        acaoFechar={() => setAberto(false)}
      />
    </Container>
  );
}

export const Container = styled(View, {
  backgroundColor: '#e9e9e9',
  borderBottom: '1px solid #5454a0',
  boxSizing: 'border-box',
  height: '41px',
  justifyContent: 'space-between',
  paddingLeft: '24px',
  paddingRight: '24px',
  width: '100%',
});
