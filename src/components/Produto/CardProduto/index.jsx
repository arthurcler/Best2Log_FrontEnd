import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos Icones
import { GoListUnordered } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import do CRUD
import { getProduto } from "../../../services/crudClient";
import { api } from "../../../services/api";

const CardProduto = () => {
    const [item, setItem] = useState([])
    const [exibir, setExibir] = useState()
    const [detalhes, setDetalhes] = useState(false)
    const [busca, setBusca] = useState("")

    // Dados do produto
    const [nomeProduto, setNomeProduto] = useState(exibir?.nomeProduto)
    const [codigo, setCodigo] = useState(exibir?.codigo)
    const [categoria, setCategoria] = useState(exibir?.categoria)
    const [valor, setValor] = useState(exibir?.valor)
    const [status, setStatus] = useState(exibir?.status)

    useEffect(() => {
        (async () => {
            const data = await getProduto()
            setItem(data)
        })()
    }, [detalhes])

    const itemFiltro = item?.filter(
        (item) => item.nomeProduto.toUpperCase().includes(busca.toUpperCase())
            || item.categoria.toUpperCase().includes(busca.toUpperCase())
            || item.status.toUpperCase().includes(busca.toUpperCase()))

    // Função CRUD da api para PUT do produto
    const atualizarItemns = async (e) => {
        if (
            nomeProduto !== ""
            & codigo !== ""
            & categoria !== ""
            & valor !== ""
            & status !== "") {

            e.preventDefault()
            console.log("entrei no submit do prod")

            const itemAtualizado = {
                nomeProduto: nomeProduto,
                codigo: codigo,
                categoria: categoria,
                valor: valor,
                status: status,
            }
            await api.put(`/produto/dto/${exibir.id_produto}`, itemAtualizado)
            alert("Atualizado com sucesso")
        }
    }

    const inativarItemns = async (e) => {
        e.preventDefault()

        const itemInativado = {
            nomeProduto: exibir?.nomeProduto,
            codigo: exibir?.codigo,
            categoria: exibir?.categoria,
            valor: exibir?.valor,
            status: "INATIVO",
        }
        console.log(itemInativado)
        await api.put(`/produto/dto/${exibir.id_produto}`, itemInativado)
        console.log("Inativo:", exibir)
        alert("Atualizado com sucesso")
    }

    // A tentativa de passar o id de cada card de produto para outro componente (Produto Detalhes) não foi bem sucedida
    // então trouxemos o componente todo para uma renderização condicional de html na função ()
    const Render = () => {
        // console.log(item)
        if (detalhes) {
            return (
                <>
                    <div id="mainCardProdutoDetalhes">
                        <div id="CardProdutoDetalhes">
                            <div className="CardProdutoDetalhesLabel">
                                <h2 className="mainCardProdutoDetalhes" >Nome do Produto: </h2>
                                <h2 className="mainCardProdutoDetalhes" >Codigo: </h2>
                                <h2 className="mainCardProdutoDetalhes" >Categoria: </h2>
                                <h2 className="mainCardProdutoDetalhes" >Valor: </h2>
                                <h2 className="mainCardProdutoDetalhes" >Status: </h2>
                            </div>
                            <div className="CardProdutoDetalhes">
                                <input className="mainCardProdutoDetalhes" placeholder={exibir?.nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} value={nomeProduto} required />
                                <input className="mainCardProdutoDetalhes" placeholder={exibir?.codigo} onChange={(e) => setCodigo(e.target.value)} value={codigo} required />
                                <input className="mainCardProdutoDetalhes" placeholder={exibir?.categoria} onChange={(e) => setCategoria(e.target.value)} value={categoria} required />
                                <input className="mainCardProdutoDetalhes" placeholder={exibir?.valor} onChange={(e) => setValor(e.target.value)} value={valor} required />
                                <input className="mainCardProdutoDetalhes" placeholder={exibir?.status} onChange={(e) => setStatus(e.target.value)} value={status} required />
                            </div>
                        </div>
                    </div>
                    <div className="buttonCardProduto">
                        <button className="buttonReturnAction" alt="Botão de confirmar" on onClick={(e) => setDetalhes(false)}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                        <button className="buttonOrangeActionAtualizar" alt="Botão de atualizar o colaborador" onClick={atualizarItemns}>Atualizar Cadastro<GoListUnordered /></button>
                        <button className="buttonRedActionDeletar" alt="Botão de deletar o colaborador" onClick={inativarItemns}>Deletar Cadastro<GoListUnordered /></button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="container">
                        <form>
                            <input placeholder="pesquise pelo nome ou categoria" name="search" id="search" value={busca} onChange={(e) => setBusca(e.target.value)} />
                        </form>
                    </div>
                    <header id="headerCardProduto">
                        <label className="headerCardProduto">Código:</label>
                        <label className="headerCardProdutoNome">| Nome do Produto:</label>
                        <label className="headerCardProdutoStatus">| Categoria:</label>
                        <label className="headerCardProdutoStatus">| Valor:</label>
                        <label className="headerCardProdutoStatus">| Status:</label>
                    </header>

                    <div id="mainCardProduto">
                        {itemFiltro?.map((item, index) => (
                            <div id="CardProduto" key={index}>
                                <div className="CardProdutoTexto">
                                    <h2 className="mainCardProduto">{item.codigo}</h2>
                                    <h2 className="mainCardProdutoNome">{item.nomeProduto}</h2>
                                    <h2 className="mainCardProdutoStatus">{item.categoria}</h2>
                                    <h2 className="mainCardProdutoStatus">{item.valor}</h2>
                                    <h2 className="mainCardProdutoStatus">{item.status}</h2>
                                    <div id="actionView">
                                        <button className="buttonBlueActionView" alt="Botão de visualizar produto" onClick={(e) => setDetalhes(true) + setExibir(item)}>+<GoListUnordered /></button>
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
            <header id="headerCardProduto">
                <label className="headerCardProdutoTitle">Informações sobre o Produto:</label>
            </header>

            <div>
                {Render()}
            </div>
        </>
    )
}
export default CardProduto