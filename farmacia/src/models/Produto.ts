import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  tipo: string;
  categoria: Categoria | null;

}