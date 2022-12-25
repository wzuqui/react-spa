import { IHistorico } from '../entities/historico';

export class HistoricoRepository {
  #KEY = '__SAFE_HISTORICO__';

  public atualiza(item: IHistorico) {
    const itens = this.listar();
    const persistido = itens.find(p => p.rota === item.rota);
    if (persistido) {
      persistido.acessado = item.acessado;
      persistido.acessadoDataHora = item.acessadoDataHora;
      persistido.favoritado = item.favoritado;
      persistido.rota = item.rota;
    } else {
      itens.push(item);
    }
    this._persistir(itens);
  }

  public listar() {
    // prettier-ignore
    const retorno = (JSON.parse(localStorage.getItem(this.#KEY) ?? '[]') as IHistorico[]).filter(p => p.rota !== 'pagina-inicial');
    return retorno;
  }

  public obter(rota: string) {
    const retorno = this.listar().find(p => p.rota === rota);
    return retorno;
  }

  public remover(rota: string) {
    const itens = this.listar();
    const index = itens.findIndex(p => p.rota === rota);
    itens.splice(index, 1);
    this._persistir(itens);
  }

  private _persistir(itens: IHistorico[]) {
    const novo_itens = itens.filter(p => p.rota !== 'pagina-inicial');
    localStorage.setItem(this.#KEY, JSON.stringify(novo_itens));
  }
}
