import { styled } from '@stitches/react';
import List from 'devextreme-react/list';
import DataSource from 'devextreme/data/data_source';
import { useEffect, useRef } from 'react';

import { useClickOutside } from '../hooks/useClickOutside';
import { Abas } from '../shared/abas';

interface MenuProps {
  aberto: boolean;
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

  useClickOutside(
    ref,
    () => aberto && props.acaoFechar(),
    aberto
  );

  useEffect(
    function () {
      if (!aberto) return;
      // listRef.current?.instance.focus();
    },
    [aberto]
  );

  return (
    <Container ref={ref}>
      <Content aberto={aberto}>
        <List
          collapsibleGroups={true}
          dataSource={dataSource}
          grouped={true}
          height="100%"
          itemRender={Item}
          ref={listRef}
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
  position: 'absolute',
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
