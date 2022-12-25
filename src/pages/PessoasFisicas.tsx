import { HistoricoService } from '../services/historico.service';

export function PessoasFisicas() {
  new HistoricoService().atualiza('acesso', 'pessoas-fisicas');
  return <h1>Pessoas físicas</h1>;
}
