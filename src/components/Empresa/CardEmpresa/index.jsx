import React, { useState, useEffect } from "react";
import { GoListUnordered } from 'react-icons/go';
import "./styles.css";

// Import dos Icones
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import do CRUD
import { getEmpresa } from "../../../services/crudClient";
import { api } from "../../../services/api";

const CardEmpresa = () => {
    const [item, setItem] = useState([])
    const [exibir, setExibir] = useState()
    const [detalhes, setDetalhes] = useState(false)
    const [busca, setBusca] = useState("")

    // Dados da empresa
    const [nomeEmpresa, setNomeEmpresa] = useState()
    const [razaoSocial, setRazaoSocial] = useState()
    const [cnpj, setCnpj] = useState()
    const [status, setStatus] = useState(exibir?.status)

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
            const data = await getEmpresa()
            setItem(data)
        })()
    }, [detalhes])

    const itemFiltro = item?.filter(
        (item) => item.nomeEmpresaParceira.toUpperCase().includes(busca.toUpperCase())
            || item.cnpj.toUpperCase().includes(busca.toUpperCase())
            || item.status.toUpperCase().includes(busca.toUpperCase()))

    // Função CRUD da api para PUT do empresa
    const atualizarItemns = async (e) => {
        const itemAtualizado = {
            nomeEmpresaParceira: nomeEmpresa,
            razaoSocial: razaoSocial,
            cnpj: exibir?.cnpj,
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
        await api.put(`/empresa_parceira/dto/${exibir.idEmpresaParceira}`, itemAtualizado)
        alert("Atualizado com sucesso")
    }

    const inativarItemns = async (e) => {
        e.preventDefault()

        const itemInativado = {
            nomeEmpresaParceira: exibir?.nomeEmpresaParceira,
            razaoSocial: exibir?.razaoSocial,
            cnpj: exibir?.cnpj,
            status: "INATIVO",

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
        await api.put(`/empresa_parceira/${exibir.idEmpresaParceira}`, itemInativado)
        alert("Inativado com sucesso")
    }

    // A tentativa de passar o id de cada card de empresa para outro componente (Empresa Detalhes) não foi bem sucedida
    // então trouxemos o componente todo para uma renderização condicional de html na função ()
    const Render = () => {
        // console.log(item)
        if (detalhes) {
            return (
                <>
                    <div id="mainCardEmpresaDetalhes">
                        <div id="CardEmpresaDetalhes">
                            <div className="CardEmpresaDetalhesLabel">
                                <h2 className="mainCardEmpresaDetalhes" >Nome: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >Razão Social: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >CNPJ: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >Status: </h2>
                            </div>
                            <div className="CardEmpresaDetalhes">
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.nomeEmpresaParceira} onChange={(e) => setNomeEmpresa(e.target.value)} value={nomeEmpresa} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} value={razaoSocial} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.cnpj} onChange={(e) => setCnpj(e.target.value)} value={cnpj} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.status} onChange={(e) => setStatus(e.target.value)} value={status} required />
                            </div>
                            <div className="CardEmpresaDetalhesLabel">
                                <h2 className="mainCardEmpresaDetalhes" >CEP: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >Estado: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >Cidade: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >Bairro: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >Rua: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >Número: </h2>
                                <h2 className="mainCardEmpresaDetalhes" >Complemento: </h2>
                            </div>
                            <div className="CardEmpresaDetalhes">
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.endereco.cep} onChange={(e) => setCep(e.target.value)} value={cep} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.endereco.estado} onChange={(e) => setEstado(e.target.value)} value={estado} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.endereco.cidade} onChange={(e) => setCidade(e.target.value)} value={cidade} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.endereco.bairro} onChange={(e) => setBairro(e.target.value)} value={bairro} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.endereco.logradouro} onChange={(e) => setLogradouro(e.target.value)} value={logradouro} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.endereco.numero} onChange={(e) => setNumero(e.target.value)} value={numero} required />
                                <input className="mainCardEmpresaDetalhes" placeholder={exibir?.endereco.complemento} onChange={(e) => setComplemento(e.target.value)} value={complemento} required />
                            </div>
                        </div>
                    </div>
                    <div className="buttonCardEmpresa">
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
                            <input placeholder="pesquise pelo nome ou cnpj" name="search" id="search" value={busca} onChange={(e) => setBusca(e.target.value)} />
                        </form>
                    </div>

                    <header id="headerCardEmpresa">
                        <label className="headerCardEmpresa">Nome:</label>
                        <label className="headerCardEmpresaNome">| Razão Social:</label>
                        <label className="headerCardEmpresaStatus">| CNPJ:</label>
                        <label className="headerCardEmpresaStatus">| Status:</label>
                    </header>

                    <div id="mainCardEmpresa">
                        {itemFiltro?.map((item, index) => (
                            <div id="CardEmpresa" key={index}>
                                <div className="CardEmpresaTexto">
                                    <h2 className="mainCardEmpresa">{item.nomeEmpresaParceira}</h2>
                                    <h2 className="mainCardEmpresaNome">{item.razaoSocial}</h2>
                                    <h2 className="mainCardEmpresaStatus">{item.cnpj}</h2>
                                    <h2 className="mainCardEmpresaStatus">{item.status}</h2>
                                    <div id="actionView">
                                        <button className="buttonBlueActionView" alt="Botão de visualizar empresa" onClick={(e) => setDetalhes(true) + setExibir(item)}>+<GoListUnordered /></button>
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
            <header id="headerCardEmpresa">
                <label className="headerCardEmpresaTitle">Informações sobre a empresa:</label>
            </header>

            <div>
                {Render()}
            </div>
        </>
    )
}
export default CardEmpresa