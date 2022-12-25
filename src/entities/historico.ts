import { Rotas } from '../shared/rotas';

export interface IHistorico {
  acessado: number | null;
  acessadoDataHora: string | null;
  favoritado: boolean | null;
  rota: Rotas;
}
