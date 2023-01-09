import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos icones
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { GoListUnordered } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import CRUD
// import { getOrdem } from '../../../services/crudClient'
import { getOrdem } from "../../../services/crudClient";
import { api } from "../../../services/api";



const OrdemEntrega = (props) => {
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
    }, [detalhes])

    const atualizarConferido = async (e) => {
        await api.put(`entrega_produto/dto/em_transito/${exibir.idEntregaProduto}`)
        alert("Atualizado com sucesso")
    }

    const atualizarSeparado = async (e) => {
        await api.put(`entrega_produto/dto/entregue/${exibir.idEntregaProduto}`)
        alert("Atualizado com sucesso")
    }

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
                        <button className="buttonOrangeActionAtualizar" alt="Botão de atualizar o ordem" onClick={atualizarConferido}>Em trânsito<GoListUnordered /></button>
                        <button className="buttonOrangeActionAtualizar" alt="Botão de atualizar o ordem" onClick={atualizarSeparado}>Confirmar Entrega<GoListUnordered /></button>
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
            <header id="headerFuncionalidade">
                {/* Titulo do elemento renderizado */}
                <div className="tituloFuncionalidade">
                    <h1><FaRegEnvelopeOpen /> Ordens Abertas</h1>
                </div>
            </header>

            <main id="formularioOrdem">
                {Render()}
            </main>
        </>
    )

}
export default OrdemEntrega