import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos icones
import { GoCheck } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import CRUD POST
// import { postProduto } from "../../../services/crudClient";
import { api } from "../../../../services/api";

const EditarProduto = (props) => {

    // Dados do produto
    const [nomeProduto, setNomeProduto] = useState("")
    const [codigo, setCodigo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [valor, setValor] = useState("")

    useEffect(() => {
        (async () => {
            // const data = await postProduto()
            // console.log("o que é o post:", data)
        })()
    }, [])

    // Função CRUD da api para post do produto
    const handleSubmit = async (e) => {
        if (
            nomeProduto !== ""
            & codigo !== ""
            & categoria !== ""
            & valor !== "") {

            e.preventDefault()
            console.log("entrei no submit do colab")

            const postProduto = {
                nomeProduto: nomeProduto,
                codigo: codigo,
                categoria: categoria,
                valor: valor
            }
            await api.post("/produto/dto", postProduto)
            console.log("post colab: ", postProduto)
            alert("Cadastrado com sucesso")
        }
    }

    return (
        <>
            <main id="formularios">
                {/* Campos de preenchimento de informações pessoais do produto */}
                <div id="dadosProduto">
                    <h2>Dados do Produto</h2>
                    <form className="formProduto" onSubmit={handleSubmit}>
                        <div className="fieldProduto">
                            <label className="labelEditProduto" id="nome">Nome do produto:</label>
                            <input
                                className="inputProduto"
                                placeholder="digite o nome"
                                type="text"
                                value={nomeProduto}
                                onChange={(e) => setNomeProduto(e.target.value)}
                            />
                        </div>
                        <div className="fieldProduto">
                            <label className="labelEditProduto" id="cod">código:</label>
                            <input
                                className="inputProduto"
                                placeholder="digite o código"
                                type="text"
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                            />
                        </div>
                        <div className="fieldProduto">
                            <label className="labelEditProduto" id="cat">Categoria:</label>
                            <input
                                className="inputProduto"
                                placeholder="digite a categoria"
                                type="text"
                                maxLength="45"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            />
                        </div>
                        <div className="fieldProduto">
                            <label className="labelEditProduto" id="prod">Valor:</label>
                            <input
                                className="inputProduto"
                                placeholder="digite o valor"
                                type="number"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </main>

            {/* Botão de confirmação para o post do Produto e botão para retornar a lista de produtoes */}
            <footer id="confirmButtonColab">
                <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmit}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button>
            </footer>
        </>
    )
}
export default EditarProduto