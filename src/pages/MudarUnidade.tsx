import { HistoricoService } from '../services/historico.service';

export function MudarUnidade() {
  new HistoricoService().atualiza('acesso', 'mudar-unidade');
  return <h1>Mudar unidade</h1>;
}
