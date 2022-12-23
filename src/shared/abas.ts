import PaginaInicialSvg from '../assets/pagina-inicial.svg';
import PessoaFisicaSvg from '../assets/pessoa-fisica.svg';
import PessoaJuridicaSvg from '../assets/pessoa-juridica.svg';
import UnidadeSvg from '../assets/unidade.svg';

export const Abas = [
  {
    ativa: true,
    categoria: null,
    descricao: null,
    fixo: true,
    icone: PaginaInicialSvg,
    rota: 'pagina-inicial',
    titulo: 'Página inicial',
  },
  {
    ativa: false,
    categoria: 'Cadastros',
    descricao: 'Cadastros de pessoas jurídicas',
    fixo: false,
    icone: PessoaJuridicaSvg,
    rota: 'pessoas-juridicas',
    titulo: 'Pessoas jurídicas',
  },
  {
    ativa: false,
    categoria: 'Cadastros',
    descricao: 'Cadastros de pessoas físicas',
    fixo: false,
    icone: PessoaFisicaSvg,
    rota: 'pessoas-fisicas',
    titulo: 'Pessoas físicas',
  },
  {
    ativa: false,
    categoria: 'Configurações',
    // prettier-ignore
    descricao: 'Locatários e unidades que podem ser alternadas trocando o escopo do sistema',
    fixo: false,
    icone: UnidadeSvg,
    rota: 'mudar-unidade',
    titulo: 'Mudar unidade',
  },
];
