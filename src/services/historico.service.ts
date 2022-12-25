import { List } from 'linqts';

import { IHistorico } from '../entities/historico';
import { HistoricoRepository } from '../repositories/historico.repository';

interface IObterResponse {
  favoritos: IHistorico[];
  maisAcessados: IHistorico[];
  recentes: IHistorico[];
}

export class HistoricoService {
  private _repository: HistoricoRepository;

  constructor() {
    this._repository = new HistoricoRepository();
  }

  public obter(): IObterResponse {
    const itens = this._repository.listar();

    const favoritos = new List(itens)
      .Where(p => p !== undefined && p.favoritado === true)
      .OrderByDescending(p => p.acessadoDataHora)
      .Take(5)
      .ToArray();

    const maisAcessados = new List(itens)
      .Where(p => p !== undefined && p.acessado !== null && p.acessado > 0)
      .OrderByDescending(p => p.acessado)
      .Take(5)
      .ToArray();

    const recentes = new List(itens)
      .Where(
        p =>
          p !== undefined &&
          p.acessado !== null &&
          p.acessado > 0 &&
          p.acessadoDataHora !== null
      )
      .OrderByDescending(p => p.acessadoDataHora)
      .Take(5)
      .ToArray();

    return {
      favoritos,
      maisAcessados,
      recentes,
    };
  }

  public obterPorRota(rota: string) {
    const retorno = this._repository.obter(rota);
    return retorno;
  }

  public atualiza(tipo: 'acesso' | 'desfavoritar' | 'favoritar', rota: string) {
    const item = this.obterPorRota(rota) ?? ({ rota } as IHistorico);
    switch (tipo) {
      case 'acesso':
        item.acessado ??= 0;
        item.acessado++;
        item.acessadoDataHora = new Date().toISOString();
        break;

      case 'desfavoritar':
        item.favoritado = false;
        break;

      case 'favoritar':
        item.favoritado = true;
        break;
    }
    this._repository.atualiza(item);
  }

  public remover(
    tipo: 'favoritos' | 'maisAcessados' | 'recentes',
    rota: string
  ) {
    const item = this.obterPorRota(rota) ?? ({ rota } as IHistorico);

    switch (tipo) {
      case 'favoritos':
        item.favoritado = false;
        break;

      case 'maisAcessados':
        item.acessado = 0;
        break;

      case 'recentes':
        item.acessadoDataHora = null;
        break;
    }
    this._repository.atualiza(item);
  }
}
