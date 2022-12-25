import { TileView as TileViewBase } from 'devextreme-react';
import { useState } from 'react';

import { IHistorico } from '../entities/historico';
import { HistoricoService } from '../services/historico.service';
import { styled } from '../styled';
import { transformarCamelCaseEmTexto } from '../utils/transformarCamelCaseEmTexto';
import { HistoricoItem } from './HistoricoItem';

interface HistoricoProps {
  acaoAbrir(rota: string): void;
}

export function Historico({ acaoAbrir, ...props }: HistoricoProps) {
  const service = new HistoricoService();
  const [historico, setHistorico] = useState(service.obter());

  function acaoDesfavoritar(rota: string) {
    service.atualiza('desfavoritar', rota);
    setHistorico(service.obter());
  }

  function acaoFavoritar(rota: string) {
    service.atualiza('favoritar', rota);
    setHistorico(service.obter());
  }

  function acaoRemover(tipo: string, rota: string) {
    service.remover(tipo as any, rota);
    setHistorico(service.obter());
  }

  return (
    <Container {...props}>
      {Object.entries(historico).map(([key, value]: [string, IHistorico[]]) => (
        <Item
          key={key}
          hidden={value.length === 0}
        >
          <Titulo>{transformarCamelCaseEmTexto(key)}</Titulo>
          <TileView
            baseItemHeight={90}
            baseItemWidth={120}
            direction="vertical"
            height={140}
            itemRender={data => (
              <HistoricoItem
                rota={data.rota}
                acaoFavoritar={acaoFavoritar}
                acaoDesfavoritar={acaoDesfavoritar}
                acaoRemover={() => acaoRemover(key, data.rota)}
              />
            )}
            items={value}
            onItemClick={e => acaoAbrir(e.itemData!.rota)}
            showScrollbar="never"
            width="100%"
          />
        </Item>
      ))}
    </Container>
  );
}

const Container = styled('div', {
  marginTop: 24,
  width: 464,
});

const Item = styled('div', {});

const Titulo = styled('strong', {});

const TileView = styled(TileViewBase<IHistorico>, {
  '.dx-tile': {
    borderRadius: '$round',
    boxShadow: '$boxShadow',
  },
  '.dx-tile.dx-state-focused': {
    backgroundColor: '#f5f5f5',
  },
});
