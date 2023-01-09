import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos icones
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { GoListUnordered } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import CRUD
// import { getOrdem } from '../../../services/crudClient'
import { api } from '../../../services/api'
import { getColaborador } from "../../../services/crudClient";



const OrdemAberta = (props) => {
    const [item, setItem] = useState([])
    const [exibir, setExibir] = useState()
    const [detalhes, setDetalhes] = useState(false)


    // Ordem de Entrega
    const [data, setData] = useState(exibir?.data)
    const [dataConferencia, setDataConferencia] = useState(exibir?.dataConferencia)
    const [remetente, setRemetente] = useState(exibir?.remetente)

    // Produto
    const [codigo, setCodigo] = useState(exibir?.codigo)
    const [nomeProduto, setNomeProduto] = useState(exibir?.nomeProduto)
    const [categoria, setCategoria] = useState(exibir?.categoria)
    const [valor, setValor] = useState(exibir?.valor)

    useEffect(() => {
        // (async () => {
        //     const data = await getOrdemEntrega()
        //     setItem(data)
        //     console.log("o que é:" + data)
        // })()
        (async () => {
            const data = await getColaborador()
            setItem(data)
            console.log("o que é:" + data)
        })()
    }, [])

    const atualizarItemns = async (e) => {
        try {
            const itemAtualizado = {
                data: data,
                dataConferencia: dataConferencia,
                remetente: remetente,

                entregasProdutos: {
                    codigo: codigo,
                    nomeProduto: nomeProduto,
                    categoria: categoria,
                    valor: valor
                }
            }
            console.log(itemAtualizado)
            await api.put(`/ordem/dto/${exibir.idOrdemDeEntrega}`, itemAtualizado)
            alert("Atualizado com sucesso")
        } catch {
            alert("erro ao atualizar confira os campos")
        }
    }

    const Render = () => {
        if (detalhes) {
            return (
                <>
                    <section id="headerCardOrdem">
                        <label className="headerCardOrdemDetalhe">Data:</label>
                        <label className="headerCardOrdemDataConfDetalhe">| Data da Conferência:</label>
                        <label className="headerCardOrdemRemDetalhe">| Remetente:</label>
                        <label className="headerCardOrdemRemDetalhe">| Produto:</label>
                    </section>
                    <div id="mainCardOrdemDetalhe">
                        {item?.map((item, index) => (
                            <div id="CardOrdemDetalhe" key={index}>
                                <div className="CardOrdemTextoDetalhe">
                                    <h2 className="mainCardOrdemDetalhe">{item.funcaoFuncionario}</h2>
                                    <h2 className="mainCardOrdemDataConfDetalhe">{item.nomeFuncionario}</h2>
                                    <h2 className="mainCardOrdemRemDetalhe">{item.status}</h2>
                                    <h2 className="mainCardOrdemRemDetalhe">{item.status}</h2>
                                    {/* <h2 className="mainCardOrdem">{item.data}</h2>
                                    <h2 className="mainCardOrdemNome">{item.dataConferencia}</h2>
                                <h2 className="mainCardOrdemNome">{item.remetente}</h2> */}
                                    {/* <h2 className="mainCardColaboradorStatus">{item.entregasProdutos}</h2> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="buttonCardColaborador">
                        <button className="buttonReturnAction" alt="Botão de confirmar" on onClick={(e) => setDetalhes(false)}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <section id="headerCardOrdem">
                        <label className="headerCardOrdem">Data:</label>
                        <label className="headerCardOrdemDataConf">| Data da Conferência:</label>
                        <label className="headerCardOrdemRem">| Remetente:</label>
                    </section>
                    <div id="mainCardOrdem">
                        {item?.map((item, index) => (
                            <div id="CardOrdem" key={index}>
                                <div className="CardOrdemTexto">
                                    <h2 className="mainCardOrdem">{item.funcaoFuncionario}</h2>
                                    <h2 className="mainCardOrdemDataConf">{item.nomeFuncionario}</h2>
                                    <h2 className="mainCardOrdemDataConf">{item.status}</h2>
                                    {/* <h2 className="mainCardOrdem">{item.data}</h2>
                                    <h2 className="mainCardOrdemNome">{item.dataConferencia}</h2>
                                    <h2 className="mainCardOrdemNome">{item.remetente}</h2> */}
                                    {/* <h2 className="mainCardColaboradorStatus">{item.entregasProdutos}</h2> */}
                                    <div id="actionView">
                                        <button className="buttonBlueActionView" alt="Botão de visualizar colaborador" onClick={(e) => setDetalhes(true) + setExibir(item)}>+<GoListUnordered /></button>
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
export default OrdemAberta