import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: unknown;
    tema?: Tema| null
}

export default Postagem;