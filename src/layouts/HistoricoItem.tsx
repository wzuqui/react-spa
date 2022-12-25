import { StarAdd20Regular, StarOff20Filled } from '@fluentui/react-icons';

import FecharSvg from '../assets/fechar.svg';
import { HistoricoService } from '../services/historico.service';
import { Abas } from '../shared/abas';
import { styled } from '../styled';

interface TileViewItemProps {
  rota: string;
  acaoDesfavoritar(rota: string): void;
  acaoFavoritar(rota: string): void;
  acaoRemover(rota: string): void;
}

export function HistoricoItem(props: TileViewItemProps) {
  const { rota } = props;
  const aba = Abas.find(p => p.rota === rota);

  if (!aba) return <div></div>;

  const service = new HistoricoService();
  const historico = service.obterPorRota(rota);
  const favoritado = historico?.favoritado ?? false;

  const Container = styled('div', {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
    position: 'relative',

    '&:hover .acoes': {
      display: 'flex',
    },
    '.acoes': {
      display: 'none',
    },
  });

  const Icone = styled('img', {
    height: 40,
  });

  const Titulo = styled('div', {
    textAlign: 'center',
    fontSize: 'small',
    userSelect: 'none',
  });

  const Acoes = styled('div', {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    left: 0,
    padding: 4,
    position: 'absolute',
    right: 0,
    top: 0,
  });

  const StarAdd = styled(StarAdd20Regular, {
    color: '$primary',
    height: 18,
  });
  const StarOff = styled(StarOff20Filled, {
    color: '$primary',
    height: 18,
  });
  const Fechar = styled(
    () => (
      <img
        src={FecharSvg}
        height={12}
        width={12}
        alt="Fechar"
      />
    ),
    {}
  );

  function acaoDesfavoritar(
    evento: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evento.stopPropagation();
    props.acaoDesfavoritar(rota);
  }

  function acaoFavoritar(
    evento: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evento.stopPropagation();
    props.acaoFavoritar(rota);
  }

  function acaoRemover(
    evento: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evento.stopPropagation();
    props.acaoRemover(rota);
  }

  return (
    <div className="dx-tile-content">
      <Container>
        <Acoes className="acoes">
          {favoritado ? (
            <button
              onClick={acaoDesfavoritar}
              style={{ cursor: 'pointer' }}
              title="Remover esta página dos favoritos"
            >
              <StarOff />
            </button>
          ) : (
            <button
              onClick={acaoFavoritar}
              style={{ cursor: 'pointer' }}
              title="Adicionar esta página aos favoritos"
            >
              <StarAdd />
            </button>
          )}
          <button
            onClick={acaoRemover}
            style={{ cursor: 'pointer' }}
            title={'Remover esta página da lista'}
          >
            <Fechar />
          </button>
        </Acoes>
        <Icone src={aba.icone} />
        <Titulo>{aba.titulo}</Titulo>
      </Container>
    </div>
  );
}
