import { Link } from 'react-router-dom'
import Categoria from '../../models/Categoria'


interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/z2sWAwU.jpeg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            width: "100%", 
         }}>
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl text-black font-bold bg-slate-200 h-full'>{categoria.nomeCategoria}</p>

            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default CardCategorias