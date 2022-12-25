import { HistoricoService } from '../services/historico.service';

export function PessoasJuridicas() {
  new HistoricoService().atualiza('acesso', 'pessoas-juridicas');
  return <h1>Pessoas jurídicas</h1>;
}
