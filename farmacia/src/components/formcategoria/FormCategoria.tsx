import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../service/Service";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {

        await buscar(`/categorias/${id}`, setCategoria)

    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)

                alert('A categoria foi atualizado com sucesso!')
            } catch (error: any) {

                alert('Erro ao atualizar a categoria.')


            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)

                alert('A categoria foi cadastrada com sucesso!')
            } catch (error: any) {

                alert('Erro ao cadastrar a categoria.')

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/cJSL0WE.jpeg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            width: "100%", 
         }}>
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-6xl text-center my-20 font-bold bg-indigo-800 bg-opacity-75 text-white text-center py-40 rounded-md">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col text-center text-white gap-2 font-bold bg-indigo-800 bg-opacity-75">
                    <label htmlFor="nomeCategoria"> Descrição da Categoria </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui a categoria do produto"
                        name='nomeCategoria'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nomeCategoria}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
        </div>
    );
}

export default FormCategoria;