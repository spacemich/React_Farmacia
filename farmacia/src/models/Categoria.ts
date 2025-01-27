import Produto from "./Produto";

export default interface Categoria {
    id: number;
    nomeCategoria: string;
    produto?: Produto | null;
}