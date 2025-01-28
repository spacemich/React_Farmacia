import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">M&B</Link>

                    <div className='flex gap-4'>
                    <Link to='/categorias' className='hover:underline'>Categoria</Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar