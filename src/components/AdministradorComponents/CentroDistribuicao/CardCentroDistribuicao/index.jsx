import React, { useState, useEffect } from "react";
import { GoListUnordered } from 'react-icons/go';
import "./styles.css";

// Import dos Icones
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import do CRUD
import { getCentroDistribuicao } from "../../../../services/crudClient";
import { api } from "../../../../services/api";

const CardCentroDistribuicao = () => {
    const [item, setItem] = useState([])
    const [exibir, setExibir] = useState()
    const [detalhes, setDetalhes] = useState(false)
    const [busca, setBusca] = useState("")

    // Dados do Centro de Distribuição
    const [nomeCentroDistribuicao, setNomeCentroDistribuicao] = useState()

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
            const data = await getCentroDistribuicao()
            setItem(data)
        })()
    }, [detalhes])

    const itemFiltro = item?.filter(
        (item) => item.nomeCentroDistribuicao.toUpperCase().includes(busca.toUpperCase()))

    // Função CRUD da api para PUT do centro
    const atualizarItemns = async (e) => {
        const itemAtualizado = {
            nomeCentroDistribuicao: nomeCentroDistribuicao,

            endereco: {
                cep: cep,
                estado: estado,
                cidade: cidade,
                bairro: bairro,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento
            },

            bairrosAssociados: {

            }
        }
        await api.put(`/cd/dto/${exibir.idCentroDistribuicao}`, itemAtualizado)
        alert("Atualizado com sucesso")
    }

    const inativarItemns = async (e) => {
        e.preventDefault()

        const itemInativado = {
            nomeCentroDistribuicao: exibir?.nomeCentroDistribuicao,
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

            // bairrosAssociados: {

            // }
        }
        console.log(itemInativado)
        await api.put(`/cd/dto/${exibir.idCentroDistribuicao}`, itemInativado)
        alert("Inativado com sucesso")
    }

    // A tentativa de passar o id de cada card de centro para outro componente (Centro Detalhes) não foi bem sucedida
    // então trouxemos o componente todo para uma renderização condicional de html na função ()
    const Render = () => {
        if (detalhes) {
            return (
                <>
                    <div id="mainCardCentroDetalhes">
                        <div id="CardCentroDetalhes">
                            <div className="CardCentroDetalhesLabel">
                                <h2 className="mainCardCentroDetalhes" >Nome do CD: </h2>
                            </div>
                            <div className="CardCentroDetalhes">
                                <input className="mainCardCentroDetalhes" placeholder={exibir?.nomeCentroDistribuicao} onChange={(e) => setNomeCentroDistribuicao(e.target.value)} value={nomeCentroDistribuicao} required />
                            </div>
                            <div className="CardCentroDetalhesLabel">
                                <h2 className="mainCardCentroDetalhes" >CEP: </h2>
                                <h2 className="mainCardCentroDetalhes" >Estado: </h2>
                                <h2 className="mainCardCentroDetalhes" >Cidade: </h2>
                                <h2 className="mainCardCentroDetalhes" >Bairro: </h2>
                                <h2 className="mainCardCentroDetalhes" >Rua: </h2>
                                <h2 className="mainCardCentroDetalhes" >Número: </h2>
                                <h2 className="mainCardCentroDetalhes" >Complemento: </h2>
                            </div>
                            <div className="CardCentroDetalhes">
                                <input className="mainCardCentroDetalhes" placeholder={exibir?.endereco.cep} onChange={(e) => setCep(e.target.value)} value={cep} required />
                                <input className="mainCardCentroDetalhes" placeholder={exibir?.endereco.estado} onChange={(e) => setEstado(e.target.value)} value={estado} required />
                                <input className="mainCardCentroDetalhes" placeholder={exibir?.endereco.cidade} onChange={(e) => setCidade(e.target.value)} value={cidade} required />
                                <input className="mainCardCentroDetalhes" placeholder={exibir?.endereco.bairro} onChange={(e) => setBairro(e.target.value)} value={bairro} required />
                                <input className="mainCardCentroDetalhes" placeholder={exibir?.endereco.logradouro} onChange={(e) => setLogradouro(e.target.value)} value={logradouro} required />
                                <input className="mainCardCentroDetalhes" placeholder={exibir?.endereco.numero} onChange={(e) => setNumero(e.target.value)} value={numero} required />
                                <input className="mainCardCentroDetalhes" placeholder={exibir?.endereco.complemento} onChange={(e) => setComplemento(e.target.value)} value={complemento} required />
                            </div>
                        </div>
                    </div>
                    <div className="buttonCardCentro">
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
                            <input placeholder="pesquise por data ou remetente" name="search" id="search" onChange={(e) => setBusca(e.target.value)} />
                        </form>
                    </div>

                    <header id="headerCardCentro">
                        <label className="headerCardCentro">Nome:</label>
                        <label className="headerCardCentroNome">| Bairros Associados:</label>
                    </header>

                    <div id="mainCardCentro">
                        {itemFiltro?.map((item, index) => (
                            <div id="CardCentro" key={index}>
                                <div className="CardCentroTexto">
                                    <h2 className="mainCardCentro">{item.nomeCentroDistribuicao}</h2>
                                    <div id="actionView">
                                        <button className="buttonBlueActionView" alt="Botão de visualizar centro" onClick={(e) => setDetalhes(true) + setExibir(item)}>+<GoListUnordered /></button>
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
            <header id="headerCardCentro">
                <label className="headerCardCentroNome">Informações sobre o Centro de Distribuição:</label>
            </header>

            <div>
                {Render()}
            </div>
        </>
    )
}
export default CardCentroDistribuicao