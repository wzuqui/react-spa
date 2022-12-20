import { Aba } from '../components/Aba';
import { ButtonLogo } from '../components/ButtonLogo';
import { ButtonMenu } from '../components/ButtonMenu';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Perfil } from '../components/Perfil';
import { Text } from '../components/Text';
import { View } from '../components/View';

import { useState } from 'react';
import PaginaInicialSvg from '../assets/pagina-inicial.svg';
import PessoaFisicaSvg from '../assets/pessoa-fisica.svg';
import PessoaJuridicaSvg from '../assets/pessoa-juridica.svg';
import UnidadeSvg from '../assets/unidade.svg';

export function App() {
  const [abas, setAbas] = useState([
    {
      ativa: true,
      fixo: true,
      icone: PaginaInicialSvg,
      rota: 'pagina-inicial',
      titulo: 'Página inicial',
    },
    {
      ativa: false,
      fixo: false,
      icone: PessoaJuridicaSvg,
      rota: 'pessoas-juridicas',
      titulo: 'Pessoas jurídicas',
    },
    {
      ativa: false,
      fixo: false,
      icone: PessoaFisicaSvg,
      rota: 'pessoas-fisicas',
      titulo: 'Pessoas físicas',
    },
    {
      ativa: false,
      fixo: false,
      icone: UnidadeSvg,
      rota: 'mudar-unidade',
      titulo: 'Mudar unidade',
    },
  ]);

  function handleAtivarAba(rota: string) {
    setAbas(
      abas.map((p) => ({
        ...p,
        ativa: p.rota === rota,
      }))
    );
  }

  function handleFecharAba(rota: string) {
    // TODO logica completa
    setAbas(abas.filter((p) => p.rota !== rota));
  }

  return (
    <View column style={{ height: '100%' }}>
      <Header>
        <View gap="8px">
          <ButtonMenu />
          <ButtonLogo />
          <div
            style={{
              overflow: 'hidden',
              display: 'flex',
              marginBottom: '-1px',
            }}
          >
            {abas.map((p) => (
              <Aba
                key={p.rota}
                ativa={p.ativa}
                fixo={p.fixo}
                icone={p.icone}
                rota={p.rota}
                titulo={p.titulo}
                acaoAtivar={(p) => handleAtivarAba(p)}
                acaoFechar={(p) => handleFecharAba(p)}
              />
            ))}
          </div>
        </View>
        <View>
          <Perfil />
        </View>
      </Header>
      <Main column style={{ overflow: 'hidden' }}>
        <div style={{ height: '100%' }}>
          {Array(123)
            .fill(null)
            .map((_, index) => (
              <Text key={index}>
                #{index} 0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
                0123456789 0123456789 0123456789 0123456789 0123456789
              </Text>
            ))}
        </div>
      </Main>
    </View>
  );
}
