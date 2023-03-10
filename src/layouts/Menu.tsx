import List from 'devextreme-react/list';
import DataSource from 'devextreme/data/data_source';
import { ItemClickEvent } from 'devextreme/ui/list';
import { useEffect, useRef } from 'react';

import { ButtonMenu } from '../components/ButtonMenu';
import { useClickOutside } from '../hooks/useClickOutside';
import { Abas, IAba } from '../shared/abas';
import { Rotas } from '../shared/rotas';
import { styled } from '../styled';

interface MenuProps {
  aberto: boolean;
  acaoAbrir: (rota: Rotas) => void;
  acaoFechar: () => void;
}

export function Menu(props: MenuProps) {
  const { aberto } = props;
  const ref = useRef(null);
  const listRef = useRef<List>(null);
  const dataSource = new DataSource({
    store: {
      type: 'array',
      data: Abas.filter(p => p.categoria),
      key: 'rota',
    },
    group: 'categoria',
  });

  useClickOutside(ref, () => aberto && props.acaoFechar(), aberto);

  useEffect(
    function () {
      if (!aberto) return;
      listRef.current?.instance.focus();
    },
    [aberto]
  );

  function onItemClick(evento: ItemClickEvent<IAba>) {
    if (evento.itemData) {
      props.acaoAbrir(evento.itemData.rota);
    }
  }

  return (
    <Container ref={ref}>
      <Content aberto={aberto}>
        <Header>
          <ButtonMenu onClick={props.acaoFechar} />
        </Header>
        <List
          collapsibleGroups={true}
          dataSource={dataSource}
          grouped={true}
          height="100%"
          itemRender={Item}
          ref={listRef}
          onItemClick={onItemClick}
        />
      </Content>
    </Container>
  );
}

const Container = styled('div', {});
const Content = styled('div', {
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
  height: '100%',
  position: 'fixed',
  top: '0',
  width: '400px',
  zIndex: 999,
  left: '-400px',
  transition: 'left 200ms ease-in-out',

  variants: {
    aberto: {
      true: {
        left: 0,
      },
      false: {
        left: '-400px',
      },
    },
  },
});
const Header = styled('div', {
  backgroundColor: '#e9e9e9',
  borderBottom: '1px solid #5454a0',
  boxSizing: 'border-box',
  height: '41px',
  justifyContent: 'space-between',
  paddingLeft: '24px',
  paddingRight: '24px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

function Item(data: typeof Abas[0]) {
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
