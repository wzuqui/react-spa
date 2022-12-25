import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Aba } from '../components/Aba';
import { ButtonLogo } from '../components/ButtonLogo';
import { ButtonMenu } from '../components/ButtonMenu';
import { View } from '../components/View';
import { Perfil } from '../layouts/Perfil';
import { Abas } from '../shared/abas';
import { Rotas } from '../shared/rotas';
import { styled } from '../styled';
import { Menu } from './Menu';

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

  function acaoAbrir(rota: Rotas) {
    setAberto(false);
    setAbas(abas => {
      navigate(rota);
      return abas.map(p => ({
        ...p,
        ativa: p.rota === rota,
      }));
    });
  }

  function acaoAtivarAba(rota: Rotas) {
    setAbas(abas => {
      navigate(rota);
      return abas.map(p => ({
        ...p,
        ativa: p.rota === rota,
      }));
    });
  }

  function acaoAbrirMenu(
    evento: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evento.stopPropagation();
    setAberto(!aberto);
  }

  function acaoFecharAba(rota: Rotas) {
    setAbas(abas.filter(p => p.rota !== rota));
  }

  return (
    <>
      <Container>
        <View gap="8px">
          <ButtonMenu onClick={acaoAbrirMenu} />
          <ButtonLogo onClick={() => acaoAtivarAba('pagina-inicial')} />
          <View
            style={{
              overflow: 'hidden',
              marginBottom: '-1px',
            }}
          >
            {abas.map(p => (
              <Aba
                key={p.rota}
                acaoAtivar={acaoAtivarAba}
                acaoFechar={acaoFecharAba}
                ativa={p.ativa}
                fixo={p.fixo}
                icone={p.icone}
                rota={p.rota}
                titulo={p.titulo}
              />
            ))}
          </View>
        </View>
        <View alignItems="flexEnd">
          <Perfil />
        </View>
      </Container>
      <Menu
        aberto={aberto}
        acaoAbrir={acaoAbrir}
        acaoFechar={() => setAberto(false)}
      />
    </>
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
