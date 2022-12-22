import { useState } from 'react';

import { Aba } from '../components/Aba';
import { ButtonLogo } from '../components/ButtonLogo';
import { ButtonMenu } from '../components/ButtonMenu';
import { Text } from '../components/Text';
import { View } from '../components/View';
import { Header } from '../layouts/Header';
import { Main } from '../layouts/Main';
import { Perfil } from '../layouts/Perfil';
import { Abas } from '../shared/abas';

export function App() {
  const [abas, setAbas] = useState(Abas);

  function handleAtivarAba(rota: string) {
    setAbas(
      abas.map(p => ({
        ...p,
        ativa: p.rota === rota,
      }))
    );
  }

  function handleFecharAba(rota: string) {
    // TODO logica completa
    setAbas(abas.filter(p => p.rota !== rota));
  }

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
      >
        <div style={{ height: '100%' }}>
          {Array(123)
            .fill(null)
            .map((_, index) => (
              <Text key={index}>
                #{index} 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789
                0123456789
              </Text>
            ))}
        </div>
      </Main>
    </View>
  );
}
