import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos Icones
import { GoListUnordered } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import do CRUD
import { getMapaCarga } from "../../../services/crudClient";
import { api } from "../../../services/api";

const CardOrdemEntrega = () => {
    const [item, setItem] = useState([])
    const [exibir, setExibir] = useState()
    const [detalhes, setDetalhes] = useState(false)
    const [busca, setBusca] = useState("")

    // Dados pessoais
    const [nome, setNome] = useState(exibir?.nomeFuncionario)
    const [categoria, setCategoria] = useState(exibir?.cpf)
    const [destinatario, setDestinatario] = useState(exibir?.rg)
    const [quantidade, setQuantidade] = useState(exibir?.login)
    const [valor, setValor] = useState(exibir?.senha)
    const [valorTotal, setValorTotal] = useState(exibir?.funcao)
    const [status, setStatus] = useState(exibir?.status)

    // Endereço
    const [cep, setCep] = useState(exibir?.endereco.cep)
    const [estado, setEstado] = useState(exibir?.endereco.estado)
    const [cidade, setCidade] = useState(exibir?.endereco.cidade)
    const [bairro, setBairro] = useState(exibir?.endereco.bairro)
    const [logradouro, setLogradouro] = useState(exibir?.endereco.logradouro)
    const [numero, setNumero] = useState(exibir?.endereco.numero)
    const [complemento, setComplemento] = useState(exibir?.endereco.complemento)

    useEffect(() => {
        (async () => {
            const data = await getMapaCarga()
            setItem(data)
        })()
    }, [])

    const itemFiltro = item?.filter(
        (item) => item.nomeFuncionario.toUpperCase().includes(busca.toUpperCase())
            || item.funcao.toUpperCase().includes(busca.toUpperCase())
            || item.status.toUpperCase().includes(busca.toUpperCase())
    )

    // Função CRUD da api para PUT do mapaCarga
    const atualizarItemns = async (e) => {
        const itemAtualizado = {
            nome: exibir?.nome,
            categoria: exibir?.categoria,
            destinatario: exibir?.destinatario,
            quantidade: exibir?.quantidade,
            valor: exibir?.valor,
            status: exibir?.status,

            endereco: {
                cep: exibir?.endereco.cep,
                estado: exibir?.endereco.estado,
                cidade: exibir?.endereco.cidade,
                bairro: exibir?.endereco.bairro,
                logradouro: exibir?.endereco.logradouro,
                numero: exibir?.endereco.numero,
                complemento: exibir?.endereco.complemento
            }
        }
        console.log(itemAtualizado)
        await api.put(`/entrega_produto/dto${exibir.idOrdemDeEntrega}`, itemAtualizado)
        alert("Atualizado com sucesso")
    }

    const inativarItemns = async (e) => {
        e.preventDefault()
        console.log("entrei no submit do prod")

        const itemInativado = {
            nome: exibir?.nome,
            categoria: exibir?.categoria,
            destinatario: exibir?.destinatario,
            quantidade: exibir?.quantidade,
            valor: exibir?.valor,
            status: "INATIVO",

            endereco: {
                cep: exibir?.endereco.cep,
                estado: exibir?.endereco.estado,
                cidade: exibir?.endereco.cidade,
                bairro: exibir?.endereco.bairro,
                logradouro: exibir?.endereco.logradouro,
                numero: exibir?.endereco.numero,
                complemento: exibir?.endereco.complemento
            }
        }
        console.log(itemInativado)
        await api.put(`/entrega_produto/dto/${exibir.idOrdemDeEntrega}`, itemInativado)
        console.log("Inativo:", exibir)
        alert("Atualizado com sucesso")
    }

    // A tentativa de passar o id de cada card de mapaCarga para outro componente (MapaCarga Detalhes) não foi bem sucedida
    // então trouxemos o componente todo para uma renderização condicional de html na função ()
    const Render = () => {
        if (detalhes) {
            return (
                <>
                    <div id="mainCardMapaCargaDetalhes">
                        <div id="CardMapaCargaDetalhes">
                            <div className="CardMapaCargaDetalhesLabel">
                                <h2 className="mainCardMapaCargaDetalhes" >Nome: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Categoria: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Destinatário: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Quantidade: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Valor: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >*Valor Total: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Status: </h2>
                            </div>
                            <div className="CardMapaCargaDetalhes">
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.nome} onChange={(e) => setNome(e.target.value)} value={nome} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.categoria} onChange={(e) => setCategoria(e.target.value)} value={categoria} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.destinatario} onChange={(e) => setDestinatario(e.target.value)} value={destinatario} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.quantidade} onChange={(e) => setQuantidade(e.target.value)} value={quantidade} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.valor} onChange={(e) => setValor(e.target.value)} value={valor} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.valorTotal} onChange={(e) => setValorTotal(e.target.value)} value={valorTotal} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.status} onChange={(e) => setStatus(e.target.value)} value={status} required />
                            </div>
                            <div className="CardMapaCargaDetalhesLabel">
                                <h2 className="mainCardMapaCargaDetalhes" >CEP: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Estado: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Cidade: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Bairro: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Rua: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Número: </h2>
                                <h2 className="mainCardMapaCargaDetalhes" >Complemento: </h2>
                            </div>
                            <div className="CardMapaCargaDetalhes">
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.endereco.cep} onChange={(e) => setCep(e.target.value)} value={cep} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.endereco.estado} onChange={(e) => setEstado(e.target.value)} value={estado} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.endereco.cidade} onChange={(e) => setCidade(e.target.value)} value={cidade} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.endereco.bairro} onChange={(e) => setBairro(e.target.value)} value={bairro} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.endereco.logradouro} onChange={(e) => setLogradouro(e.target.value)} value={logradouro} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.endereco.numero} onChange={(e) => setNumero(e.target.value)} value={numero} required />
                                <input className="mainCardMapaCargaDetalhes" placeholder={exibir?.endereco.complemento} onChange={(e) => setComplemento(e.target.value)} value={complemento} required />
                            </div>
                        </div>
                    </div>
                    <div className="buttonCardMapaCarga">
                        <button className="buttonReturnAction" alt="Botão de confirmar" onClick={(e) => setDetalhes(false)}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                        <button className="buttonOrangeActionAtualizar" alt="Botão de atualizar o mapaCarga" onClick={atualizarItemns}>Atualizar Cadastro<GoListUnordered /></button>
                        <button className="buttonRedActionDeletar" alt="Botão de deletar o mapaCarga" onClick={inativarItemns}>Deletar Cadastro<GoListUnordered /></button>
                    </div>
                </>
            )
        } else {
            return (
                <>

                    {/* <label>Choose a car:</label>
                    <select name="cars" id="cars" value={busca} onChange={(e) => setBusca(e.target.value)}>
                        <option value="Inativo">Inativo</option>
                        <option value="Ativo">Ativo</option>
                    </select> */}

                    <div className="container">
                        <form>
                            <input placeholder="pesquise por data" name="search" id="search" onChange={(e) => setBusca(e.target.value)} />
                        </form>
                    </div>

                    <header id="headerCardMapaCarga">
                        <label className="headerCardMapaCarga"> Código:</label>
                        <label className="headerCardMapaCargaNome">| Empresa Parceira:</label>
                        <label className="headerCardMapaCargaStatus">| Data:</label>
                    </header>

                    <div id="mainCardMapaCarga">
                        {itemFiltro?.map((item, index) => (
                            <div id="CardMapaCarga" key={index}>
                                <div className="CardMapaCargaTexto">
                                    <h2 className="mainCardMapaCarga">{item.funcao}</h2>
                                    <h2 className="mainCardMapaCargaNome">{item.nomeFuncionario}</h2>
                                    <h2 className="mainCardMapaCargaStatus">{item.login}</h2>
                                    <div id="actionView">
                                        <button className="buttonBlueActionView" alt="Botão de visualizar mapaCarga" onClick={(e) => setDetalhes(true) + setExibir(item)}>+<GoListUnordered /></button>
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
            <header id="headerCardMapaCarga">
                <label className="headerCardMapaCargaTitle">Informações sobre o(a) mapaCarga(a):</label>
            </header>

            <div>
                {Render()}
            </div>
        </>
    )
}
export default CardOrdemEntrega