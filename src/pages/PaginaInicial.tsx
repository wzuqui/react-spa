import { styled } from '@stitches/react';
import { SelectBox } from 'devextreme-react/select-box';
import DataSource from 'devextreme/data/data_source';

import LogoSvg from '../assets/logo.svg';
import { Abas, IAba } from '../shared/abas';

export function PaginaInicial() {
  const dataSource = new DataSource({
    store: {
      type: 'array',
      data: Abas,
      key: 'rota',
    },
    group: 'categoria',
  });
  // const navigate = useNavigate();

  // function onContentReady(evento: ContentReadyEvent) {
  //   setTimeout(() => {
  //     evento.component.focus();
  //   }, 100);
  // }

  // function onChange(evento: SelectionChangedEvent) {
  //   const rota = '/' + evento.selectedItem.rota;
  //   console.log(rota);
  //   navigate(rota);
  // }

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
        // onContentReady={onContentReady}
        // onSelectionChanged={e => onChange(e)}
        placeholder="Pesquisar"
        searchEnabled={true}
        searchExpr={['rota', 'titulo', 'categoria']}
        valueExpr="rota"
      />
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
  marginBottom: 64,
  marginTop: 64,
  width: 480,
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
