import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Aba } from './components/Aba';
import { ButtonLogo } from './components/ButtonLogo';
import { ButtonMenu } from './components/ButtonMenu';
import { View } from './components/View';
import { Header } from './layouts/Header';
import { Main } from './layouts/Main';
import { Perfil } from './layouts/Perfil';
import { Routes } from './routes';
import { Abas } from './shared/abas';

export function App() {
  const [abas, setAbas] = useState(Abas);
  const navigate = useNavigate();
  const location = useLocation();

  function handleAtivarAba(rota: string) {
    setAbas(abas => {
      navigate(rota);
      return abas.map(p => ({
        ...p,
        ativa: p.rota === rota,
      }));
    });
  }

  function handleFecharAba(rota: string) {
    // TODO logica completa
    setAbas(abas.filter(p => p.rota !== rota));
  }

  useEffect(() => {
    const rota = location.pathname.replace(/^\//g, '');
    setAbas(abas => {
      return abas.map(p => ({
        ...p,
        ativa: p.rota === rota,
      }));
    });
  }, [location]);

  return (
    <View
      column
      full
    >
      <Header>
        <View gap="8px">
          <ButtonMenu />
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
      </Header>
      <Main
        column
        style={{ overflow: 'hidden' }}
        full
      >
        <MainContent>
          <Routes />
        </MainContent>
      </Main>
    </View>
  );
}

const MainContent = styled('div', {
  height: '100%',
  width: '100%',
});
