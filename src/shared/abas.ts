import PaginaInicialSvg from '../assets/pagina-inicial.svg';
import PessoaFisicaSvg from '../assets/pessoa-fisica.svg';
import PessoaJuridicaSvg from '../assets/pessoa-juridica.svg';
import UnidadeSvg from '../assets/unidade.svg';

export const Abas = [
  {
    ativa: true,
    fixo: true,
    icone: PaginaInicialSvg,
    rota: 'pagina-inicial',
    titulo: 'Página inicial',
  },
  {
    ativa: false,
    fixo: false,
    icone: PessoaJuridicaSvg,
    rota: 'pessoas-juridicas',
    titulo: 'Pessoas jurídicas',
  },
  {
    ativa: false,
    fixo: false,
    icone: PessoaFisicaSvg,
    rota: 'pessoas-fisicas',
    titulo: 'Pessoas físicas',
  },
  {
    ativa: false,
    fixo: false,
    icone: UnidadeSvg,
    rota: 'mudar-unidade',
    titulo: 'Mudar unidade',
  },
];
