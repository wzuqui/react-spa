/**
 * Separa a string em palavras usando expressões regulares para encontrar os limites entre maiúsculas e minúsculas
 * Converte as palavras para o formato desejado, adicionando espaços entre elas e transformando a primeira letra em maiúscula
 */
export function transformarCamelCaseEmTexto(str: string): string {
  const palavras = (str.match(/[A-Za-z][a-z]*/g) ?? []).join(' ');
  const retorno = palavras[0].toUpperCase() + palavras.substr(1).toLowerCase();

  return retorno;
}
