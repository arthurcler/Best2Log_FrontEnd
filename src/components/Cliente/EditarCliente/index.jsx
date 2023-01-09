import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos icones
import { GoCheck } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import CRUD POST
// import { postCliente } from "../../../services/crudClient";
import { api } from "../../../services/api";

const EditarCliente = (props) => {

    // Dados pessoais
    const [nomeCliente, setNomeCliente] = useState("")
    const [cpf, setCpf] = useState("")
    const [status, setStatus] = useState()

    // Endereço
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("")

    useEffect(() => {
        (async () => {
            // const data = await postCliente()
            // console.log("o que é o post:", data)
        })()
    }, [])

    // Função CRUD da api para post do cliente
    const handleSubmit = async (e) => {
        if (
            nomeCliente !== ""
            & cpf !== ""
            & status !== ""
            & cep !== ""
            & estado !== ""
            & cidade !== ""
            & rua !== ""
            & numero !== ""
            & complemento !== ""
            & bairro !== "") {

            e.preventDefault()
            console.log("entrei no submit do colab")

            const postCliente = {
                nome: nomeCliente,
                cpf: cpf,
                status: status,
    
                endereco: {
                    cep: cep,
                    estado: estado,
                    cidade: cidade,
                    bairro: bairro,
                    logradouro: rua,
                    numero: numero,
                    complemento: complemento
                }
            }
            await api.post("/cliente/dto", postCliente)
            console.log("post cliente: ", postCliente)
            alert("Cadastrado com sucesso")
        }
    }

    return (
        <>
            <main id="formularios">
                {/* Campos de preenchimento de informações pessoais do cliente */}
                <div id="dadosPessoais">
                    <h2>Dados Pessoais</h2>
                    <form className="formCliente" onSubmit={handleSubmit}>
                        <div className="fieldCliente">
                            <label className="labelEditCliente" id="nome">Nome:</label>
                            <input
                                className="inputCliente"
                                placeholder="digite o nome"
                                type="text"
                                value={nomeCliente}
                                onChange={(e) => setNomeCliente(e.target.value)}
                            />
                        </div>
                        <div className="fieldCliente">
                            <label className="labelEditCliente" id="cpf">CPF:</label>
                            <input
                                className="inputCliente"
                                placeholder="digite o CPF"
                                type="text"
                                maxLength="11"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                        <div className="fieldCliente">
                            <label className="labelEditCliente" id="rg">Status:</label>
                            <input
                                className="inputCliente"
                                placeholder="digite o RG"
                                type="text"
                                maxLength="11"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                    </form>
                </div>

                {/* Campos de preenchimento de endereço do cliente */}
                <div id="enderecoCliente">
                    <div className="clienteEndTitle">
                        <h2>Endereço</h2>
                    </div>
                    <div className="clienteEnd">
                        <form className="formClienteEnd" onSubmit={handleSubmit}>
                            <div className="fieldClienteEnd">
                                <label className="labelEditClienteEnd" id="cep">CEP:</label>
                                <input
                                    className="inputClienteEnd"
                                    placeholder="digite o CEP"
                                    type="text"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                />
                            </div>
                            <div className="fieldClienteEnd">
                                <label className="labelEditClienteEnd" id="estado">Estado:</label>
                                <input
                                    className="inputClienteEnd"
                                    placeholder="digite o Estado"
                                    type="text"
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </div>
                            <div className="fieldClienteEnd">
                                <label className="labelEditClienteEnd" id="cidade">Cidade:</label>
                                <input
                                    className="inputClienteEnd"
                                    placeholder="digite a cidade"
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </div>
                            <div className="fieldClienteEnd">
                                <label className="labelEditClienteEnd" id="bairro">Bairro:</label>
                                <input
                                    className="inputClienteEnd"
                                    placeholder="digite o bairro"
                                    type="text"
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                />
                            </div>
                        </form>
                        <form className="formClienteEnd" onSubmit={handleSubmit}>
                            <div className="fieldClienteEnd">
                                <label className="labelEditClienteEnd" id="rua">Rua:</label>
                                <input
                                    className="inputClienteEnd"
                                    placeholder="digite a rua"
                                    type="text"
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)}
                                />
                            </div>
                            <div className="fieldClienteEnd">
                                <label className="labelEditClienteEnd" id="numero">Número:</label>
                                <input
                                    className="inputClienteEnd"
                                    placeholder="digite o número"
                                    type="text"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                />
                            </div>
                            <div className="fieldClienteEnd">
                                <label className="labelEditClienteEnd" id="complemento">Complemento:</label>
                                <input
                                    className="inputClienteEnd"
                                    placeholder="digite o complemento"
                                    type="text"
                                    value={complemento}
                                    onChange={(e) => setComplemento(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Botão de confirmação para o post do Cliente e botão para retornar a lista de clientees */}
            <footer id="confirmButtonColab">
                <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmit}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button>
            </footer>
        </>
    )
}
export default EditarCliente