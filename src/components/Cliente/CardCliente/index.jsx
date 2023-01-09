import React, { useState, useEffect } from "react";
import { GoListUnordered } from 'react-icons/go';
import "./styles.css";

// Import dos Icones
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import do CRUD
import { getCliente } from "../../../services/crudClient";
import { api } from "../../../services/api";

const CardCliente = () => {
    const [item, setItem] = useState([])
    const [exibir, setExibir] = useState()
    const [detalhes, setDetalhes] = useState(false)
    const [busca, setBusca] = useState("")

    // Dados pessoais
    const [nomeCliente, setNomeCliente] = useState()
    const [cpf, setCpf] = useState()
    const [status, setStatus] = useState()

    // Endereço
    const [cep, setCep] = useState()
    const [estado, setEstado] = useState()
    const [cidade, setCidade] = useState()
    const [bairro, setBairro] = useState()
    const [logradouro, setLogradouro] = useState()
    const [numero, setNumero] = useState()
    const [complemento, setComplemento] = useState()

    useEffect(() => {
        (async () => {
            const data = await getCliente()
            setItem(data)
        })()
    }, [detalhes])

    const itemFiltro = item?.filter(
        (item) => item.nome.toUpperCase().includes(busca.toUpperCase())
        || item.cpf.toUpperCase().includes(busca.toUpperCase()))

    // Função CRUD da api para PUT do cliente
    const atualizarItemns = async (e) => {
        const itemAtualizado = {
            nome: nomeCliente,
            cpf: cpf,
            status: status,

            endereco: {
                cep: cep,
                estado: estado,
                cidade: cidade,
                bairro: bairro,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
            }
        }
        console.log(itemAtualizado)
        await api.put(`/cliente/dto/${exibir.idCliente}`, itemAtualizado)
        alert("Atualizado com sucesso")
    }

    const inativarItemns = async (e) => {
        e.preventDefault()

        const itemInativado = {
            nome: exibir?.nome,
            cpf: exibir?.cpf,
            status:"INATIVO",

            endereco: {
                cep: exibir?.endereco.cep,
                estado: exibir?.endereco.estado,
                cidade: exibir?.endereco.cidade,
                bairro: exibir?.endereco.bairro,
                logradouro: exibir?.endereco.logradouro,
                numero: exibir?.endereco.numero,
                complemento: exibir?.endereco.complemento,
            }
        }
        console.log(itemInativado)
        await api.put(`/cliente/dto/${exibir.idCliente}`, itemInativado)
        alert("Inativado com sucesso")
    }

    // A tentativa de passar o id de cada card de cliente para outro componente (Cliente Detalhes) não foi bem sucedida
    // então trouxemos o componente todo para uma renderização condicional de html na função ()
    const Render = () => {
        // console.log(item)
        if (detalhes) {
            return (
                <>
                    <div id="mainCardClienteDetalhes">
                        <div id="CardClienteDetalhes">
                            <div className="CardClienteDetalhesLabel">
                                <h2 className="mainCardClienteDetalhes" >Nome: </h2>
                                <h2 className="mainCardClienteDetalhes" >CPF: </h2>
                                <h2 className="mainCardClienteDetalhes" >Status: </h2>
                            </div>
                            <div className="CardClienteDetalhes">
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.nome} onChange={(e) => setNomeCliente(e.target.value)} value={nomeCliente} required />
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.cpf} onChange={(e) => setCpf(e.target.value)} value={cpf} required />
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.status} onChange={(e) => setStatus(e.target.value)} value={status} required />
                            </div>
                            <div className="CardClienteDetalhesLabel">
                                <h2 className="mainCardClienteDetalhes" >CEP: </h2>
                                <h2 className="mainCardClienteDetalhes" >Estado: </h2>
                                <h2 className="mainCardClienteDetalhes" >Cidade: </h2>
                                <h2 className="mainCardClienteDetalhes" >Bairro: </h2>
                                <h2 className="mainCardClienteDetalhes" >Rua: </h2>
                                <h2 className="mainCardClienteDetalhes" >Número: </h2>
                                <h2 className="mainCardClienteDetalhes" >Complemento: </h2>
                            </div>
                            <div className="CardClienteDetalhes">
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.endereco.cep} onChange={(e) => setCep(e.target.value)} value={cep} required />
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.endereco.estado} onChange={(e) => setEstado(e.target.value)} value={estado} required />
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.endereco.cidade} onChange={(e) => setCidade(e.target.value)} value={cidade} required />
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.endereco.bairro} onChange={(e) => setBairro(e.target.value)} value={bairro} required />
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.endereco.logradouro} onChange={(e) => setLogradouro(e.target.value)} value={logradouro} required />
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.endereco.numero} onChange={(e) => setNumero(e.target.value)} value={numero} required />
                                <input className="mainCardClienteDetalhes" placeholder={exibir?.endereco.complemento} onChange={(e) => setComplemento(e.target.value)} value={complemento} required />
                            </div>
                        </div>
                    </div>
                    <div className="buttonCardCliente">
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
                            <input placeholder="pesquise pelo nome ou cpf" name="search" id="search" value={busca} onChange={(e) => setBusca(e.target.value)} />
                        </form>
                    </div>

                    <header id="headerCardCliente">
                        <label className="headerCardCliente">Nome:</label>
                        <label className="headerCardClienteNome">| CPF:</label>
                        <label className="headerCardClienteStatus">| Status:</label>
                        <label className="headerCardClienteStatus">| ID:</label>
                    </header>

                    <div id="mainCardCliente">
                        {itemFiltro?.map((item, index) => (
                            <div id="CardCliente" key={index}>
                                <div className="CardClienteTexto">
                                    <h2 className="mainCardCliente">{item.nome}</h2>
                                    <h2 className="mainCardClienteNome">{item.cpf}</h2>
                                    <h2 className="mainCardClienteStatus">{item.status}</h2>
                                    <h2 className="mainCardClienteStatus">{item.idCliente}</h2>
                                    <div id="actionView">
                                        <button className="buttonBlueActionView" alt="Botão de visualizar cliente" onClick={(e) => setDetalhes(true) + setExibir(item)}>+<GoListUnordered /></button>
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
            <header id="headerCardCliente">
                <label className="headerCardClienteNome">Informações sobre o(a) cliente(a):</label>
            </header>

            <div>
                {Render()}
            </div>
        </>
    )
}
export default CardCliente