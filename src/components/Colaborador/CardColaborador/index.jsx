import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos Icones
import { GoListUnordered } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import do CRUD
import { getColaborador } from "../../../services/crudClient";
import { api } from "../../../services/api";

const CardColaborador = () => {
    const [item, setItem] = useState([])
    const [exibir, setExibir] = useState()
    const [detalhes, setDetalhes] = useState(false)
    const [busca, setBusca] = useState("")

    // Dados pessoais
    const [nomeColaborador, setNomeColaborador] = useState(exibir?.nomeFuncionario)
    const [cpf, setCpf] = useState(exibir?.cpf)
    const [rg, setRg] = useState(exibir?.rg)
    const [login, setLogin] = useState(exibir?.login)
    const [password, setPassword] = useState(exibir?.senha)
    const [funcao, setFuncao] = useState(exibir?.funcao)
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
            const data = await getColaborador()
            setItem(data)
        })()
    }, [])

    const itemFiltro = item?.filter(
        (item) => item.nomeFuncionario.toUpperCase().includes(busca.toUpperCase())
            || item.funcao.toUpperCase().includes(busca.toUpperCase())
            || item.status.toUpperCase().includes(busca.toUpperCase())
    )

    // Função CRUD da api para PUT do colaborador
    const atualizarItemns = async (e) => {
        const itemAtualizado = {
            funcao: funcao,
            nomeFuncionario: nomeColaborador,
            rg: exibir?.rg,
            cpf: exibir?.cpf,
            login: login,
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
        await api.put(`/funcionario/dto/${exibir.idFuncionario}`, itemAtualizado)
        alert("Atualizado com sucesso")
    }

    const inativarItemns = async (e) => {
        e.preventDefault()

        const itemInativado = {
            funcao: exibir?.funcao,
            nomeFuncionario: exibir?.nomeFuncionario,
            rg: exibir?.rg,
            cpf: exibir?.cpf,
            login: exibir?.login,
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
        await api.put(`/funcionario/dto/${exibir.idFuncionario}`, itemInativado)
        alert("Inativado com sucesso")
    }

    // A tentativa de passar o id de cada card de colaborador para outro componente (Colaborador Detalhes) não foi bem sucedida
    // então trouxemos o componente todo para uma renderização condicional de html na função ()
    const Render = () => {
        if (detalhes) {
            return (
                <>
                    <div id="mainCardColaboradorDetalhes">
                        <div id="CardColaboradorDetalhes">
                            <div className="CardColaboradorDetalhesLabel">
                                <h2 className="mainCardColaboradorDetalhes" >*Função: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >*Nome: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >RG: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >CPF: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >*Email: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >Senha: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >Status: </h2>
                            </div>
                            <div className="CardColaboradorDetalhes">
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.funcao} onChange={(e) => setFuncao(e.target.value)} value={funcao} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.nomeFuncionario} onChange={(e) => setNomeColaborador(e.target.value)} value={nomeColaborador} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.rg} onChange={(e) => setRg(e.target.value)} value={rg} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.cpf} onChange={(e) => setCpf(e.target.value)} value={cpf} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.login} onChange={(e) => setLogin(e.target.value)} value={login} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.senha} onChange={(e) => setPassword(e.target.value)} value={password} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.status} onChange={(e) => setStatus(e.target.value)} value={status} required />
                            </div>
                            <div className="CardColaboradorDetalhesLabel">
                                <h2 className="mainCardColaboradorDetalhes" >CEP: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >Estado: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >Cidade: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >Bairro: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >Rua: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >Número: </h2>
                                <h2 className="mainCardColaboradorDetalhes" >Complemento: </h2>
                            </div>
                            <div className="CardColaboradorDetalhes">
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.endereco.cep} onChange={(e) => setCep(e.target.value)} value={cep} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.endereco.estado} onChange={(e) => setEstado(e.target.value)} value={estado} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.endereco.cidade} onChange={(e) => setCidade(e.target.value)} value={cidade} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.endereco.bairro} onChange={(e) => setBairro(e.target.value)} value={bairro} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.endereco.logradouro} onChange={(e) => setLogradouro(e.target.value)} value={logradouro} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.endereco.numero} onChange={(e) => setNumero(e.target.value)} value={numero} required />
                                <input className="mainCardColaboradorDetalhes" placeholder={exibir?.endereco.complemento} onChange={(e) => setComplemento(e.target.value)} value={complemento} required />
                            </div>
                        </div>
                    </div>
                    <div className="buttonCardColaborador">
                        <button className="buttonReturnAction" alt="Botão de confirmar" onClick={(e) => setDetalhes(false)}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                        <button className="buttonOrangeActionAtualizar" alt="Botão de atualizar o colaborador" onClick={atualizarItemns}>Atualizar Cadastro<GoListUnordered /></button>
                        <button className="buttonRedActionDeletar" alt="Botão de deletar o colaborador" onClick={inativarItemns}>Deletar Cadastro<GoListUnordered /></button>
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
                            <input placeholder="pesquise pelo nome ou função" name="search" id="search" onChange={(e) => setBusca(e.target.value)} />
                        </form>
                    </div>

                    <header id="headerCardColaborador">
                        <label className="headerCardColaborador">Função:</label>
                        <label className="headerCardColaboradorNome">| Nome:</label>
                        <label className="headerCardColaboradorStatus">| Login:</label>
                        <label className="headerCardColaboradorStatus">| ID:</label>
                        <label className="headerCardColaboradorStatus">| Status:</label>
                    </header>

                    <div id="mainCardColaborador">
                        {itemFiltro?.map((item, index) => (
                            <div id="CardColaborador" key={index}>
                                <div className="CardColaboradorTexto">
                                    <h2 className="mainCardColaborador">{item.funcao}</h2>
                                    <h2 className="mainCardColaboradorNome">{item.nomeFuncionario}</h2>
                                    <h2 className="mainCardColaboradorStatus">{item.login}</h2>
                                    <h2 className="mainCardColaboradorStatus">{item.idFuncionario}</h2>
                                    <h2 className="mainCardColaboradorStatus">{item.status}</h2>
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
            <header id="headerCardColaborador">
                <label className="headerCardColaboradorTitle">Informações sobre o(a) colaborador(a):</label>
            </header>

            <div>
                {Render()}
            </div>
        </>
    )
}
export default CardColaborador