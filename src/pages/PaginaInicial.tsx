import { SelectBox } from 'devextreme-react/select-box';
import DataSource from 'devextreme/data/data_source';
import {
  ContentReadyEvent,
  SelectionChangedEvent,
} from 'devextreme/ui/select_box';
import { useNavigate } from 'react-router-dom';

import LogoSvg from '../assets/logo.svg';
import { Historico } from '../layouts/Historico';
import { Abas, IAba } from '../shared/abas';
import { styled } from '../styled';

export function PaginaInicial() {
  const dataSource = new DataSource({
    store: {
      type: 'array',
      data: Abas.filter(p => p.categoria),
      key: 'rota',
    },
    group: 'categoria',
  });
  const navigate = useNavigate();

  function acaoAbrir(rota: string) {
    navigate('/' + rota);
  }

  function onContentReady(evento: ContentReadyEvent) {
    setTimeout(() => {
      evento.component.focus();
    }, 100);
  }

  function onChange(evento: SelectionChangedEvent) {
    const rota = '/' + evento.selectedItem.rota;
    console.log(rota);
    navigate(rota);
  }

  return (
    <Container>
      <Logo
        src={LogoSvg}
        alt="Logo"
      />
      <Pesquisar
        dataSource={dataSource}
        displayExpr="titulo"
        grouped={true}
        itemRender={Item}
        noDataText="Sem dados"
        onContentReady={onContentReady}
        onSelectionChanged={e => onChange(e)}
        placeholder="Pesquisar"
        searchEnabled={true}
        searchExpr={['rota', 'titulo', 'categoria']}
        valueExpr="rota"
      />
      <Historico acaoAbrir={acaoAbrir} />
    </Container>
  );
}

const Container = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

const Logo = styled('img', {
  marginBottom: 20,
  marginTop: 20,
  width: 240,
});

const Pesquisar = styled(SelectBox, {
  width: 480,
});

function Item(data: IAba) {
  return (
    <ItemContainer>
      <img
        src={data.icone}
        alt={data.titulo}
        height={24}
      />
      <div>
        <b>{data.titulo}</b>
        <p>{data.descricao}</p>
      </div>
    </ItemContainer>
  );
}

const ItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',

  '> div': {
    whiteSpace: 'normal',
  },
});
