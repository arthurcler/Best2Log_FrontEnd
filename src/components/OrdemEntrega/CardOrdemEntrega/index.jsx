import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos Icones
import { GoListUnordered } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import do CRUD
import { getOrdem } from "../../../services/crudClient";
import { api } from "../../../services/api";

const CardOrdemEntrega = () => {
    const [item, setItem] = useState([])
    const [exibir, setExibir] = useState()
    const [detalhes, setDetalhes] = useState(false)
    const [busca, setBusca] = useState("")

    // Dados
    const [quantidade, setQuantidade] = useState(exibir?.quantidade)
    const [idCliente, setIdCliente] = useState(exibir?.idCliente)
    const [idProduto, setIdProduto] = useState(exibir?.idProduto)
    const [idEmpresaParceira, setIdEmpresaParceira] = useState(exibir?.idEmpresaParceira)
    const [status, setStatus] = useState(exibir?.status)

    useEffect(() => {
        (async () => {
            const data = await getOrdem()
            setItem(data)
        })()
    }, [])

    // const itemFiltro = item?.filter(
    //     (item) => item.quantidade.toUpperCase().includes(busca.toUpperCase()))

    // Função CRUD da api para PUT do ordem
    const atualizarItemns = async (e) => {
        const itemAtualizado = {
            quantidade: quantidade,
            clienteDTO: {
                idCliente: exibir?.idCliente,
            },
            produtoDTO: {
                idProduto: exibir?.idProduto,
            },
            remetente: {
                idEmpresaParceira: exibir?.idEmpresaParceira,
            }
        }
        console.log(itemAtualizado)
        await api.put(`/entrega_produto/dto/${exibir.idEntregaProduto}`, itemAtualizado)
        alert("Atualizado com sucesso")
    }

    const inativarItemns = async (e) => {
        const itemInativado = {
            quantidade: quantidade,
            clienteDTO: {
                idCliente: exibir?.idCliente,
            },
            produtoDTO: {
                idProduto: exibir?.idProduto,
            },
            remetente: {
                idEmpresaParceira: exibir?.idEmpresaParceira,
            }
        }
        console.log(itemInativado)
        await api.put(`/entrega_produto/dto/${exibir.idEntregaProduto}`, itemInativado)
        alert("Atualizado com sucesso")
    }

    // A tentativa de passar o id de cada card de ordem para outro componente (Ordem Detalhes) não foi bem sucedida
    // então trouxemos o componente todo para uma renderização condicional de html na função ()
    const Render = () => {
        if (detalhes) {
            return (
                <>
                    <div id="mainCardOrdemDetalhes">
                        <div id="CardOrdemDetalhes">
                            <div className="CardOrdemDetalhesLabel">
                                <h2 className="mainCardOrdemDetalhes" >Quantidade: </h2>
                                <h2 className="mainCardOrdemDetalhes" >Status: </h2>
                            </div>
                            <div className="CardOrdemDetalhes">
                                <input className="mainCardOrdemDetalhes" placeholder={exibir?.quantidade} onChange={(e) => setQuantidade(e.target.value)} value={quantidade} required />
                                <input className="mainCardOrdemDetalhes" placeholder={exibir?.status} onChange={(e) => setStatus(e.target.value)} value={status} required />
                                {/* <input className="mainCardOrdemDetalhes" placeholder={exibir?.categoria} onChange={(e) => setCategoria(e.target.value)} value={categoria} required /> */}
                            </div>
                        </div>
                    </div>
                    <div className="buttonCardOrdem">
                        <button className="buttonReturnAction" alt="Botão de confirmar" onClick={(e) => setDetalhes(false)}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                        <button className="buttonOrangeActionAtualizar" alt="Botão de atualizar o ordem" onClick={atualizarItemns}>Atualizar Cadastro<GoListUnordered /></button>
                        <button className="buttonRedActionDeletar" alt="Botão de deletar o ordem" onClick={inativarItemns}>Deletar Cadastro<GoListUnordered /></button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    {/* <div className="container">
                        <form>
                            <input placeholder="pesquise por data ou remetente" name="search" id="search" onChange={(e) => setBusca(e.target.value)} />
                        </form>
                    </div> */}

                    <header id="headerCardOrdem">
                        <label className="headerCardOrdem"> Quantidade:</label>
                        <label className="headerCardOrdemNome">| Status:</label>
                    </header>

                    <div id="mainCardOrdem">
                        {/* {itemFiltro?.map((item, index) => ( */}
                        {item?.map((item, index) => (
                            <div id="CardOrdem" key={index}>
                                <div className="CardOrdemTexto">
                                    <h2 className="mainCardOrdem">{item.quantidade}</h2>
                                    <h2 className="mainCardOrdemStatus">{item.status}</h2>
                                    <div id="actionView">
                                        <button className="buttonBlueActionView" alt="Botão de visualizar ordem" onClick={(e) => setDetalhes(true) + setExibir(item)}>+<GoListUnordered /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <header id="headerCardOrdem">
                <label className="headerCardOrdemTitle">Informações sobre a Ordem de Entrega:</label>
            </header>

            <div>
                {Render()}
            </div>
        </>
    )
}
export default CardOrdemEntrega