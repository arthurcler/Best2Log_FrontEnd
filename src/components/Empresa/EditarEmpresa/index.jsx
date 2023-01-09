import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos icones
import { BsArrowReturnLeft } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';

// Import CRUD POST
// import { postEmpresaParceira } from '../../../services/crudClient'
import { api } from "../../../services/api";

const EditarEmpresa = (props) => {

    // Dados pessoais
    const [nomeEmpresaParceira, setNomeEmpresaParceira] = useState("")
    const [razaoSocial, setRazaoSocial] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [status, setStatus] = useState("")

    // Endereço
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")

    useEffect(() => {
        (async () => {
            // const data = await postEmpresaParceira()
            // console.log("post empresa effect:", data)
        })()
    }, [])

    // Função CRUD da api para post dos dados do empresa
    const handleSubmit = async (e) => {
        if (
            nomeEmpresaParceira !== ""
            & razaoSocial !== ""
            & cnpj !== ""
            & cep !== ""
            & estado !== ""
            & cidade !== ""
            & bairro !== ""
            & rua !== ""
            & numero !== ""
            & complemento !== ""
            & status !== "") {

            e.preventDefault()

            const postEmpresaParceira = {
                nomeEmpresaParceira: nomeEmpresaParceira,
                razaoSocial: razaoSocial,
                cnpj: cnpj,
                status: status,

                endereco: {
                    cep: cep,
                    estado: estado,
                    cidade: cidade,
                    bairro: bairro,
                    logradouro: rua,
                    numero: numero,
                    complemento: complemento,
                }
            }

            await api.post("/empresa_parceira/dto", postEmpresaParceira)
            alert("Cadastrado com sucesso")

        }
    }


    return (
        <>
            <main id="formularios">
                {/* Campos de preenchimento de informações pessoais do empresa */}
                <div id="dadosEmpresa">
                    <h2>Informações da Empresa</h2>
                    <form className="formEmpresa" onSubmit={handleSubmit}>
                        <div className="fieldEmpresa">
                            <label className="labelEditEmpresa" id="nome">Nome:</label>
                            <input
                                className="inputEmpresa"
                                placeholder="digite o nome"
                                type="text"
                                value={nomeEmpresaParceira}
                                onChange={(e) => setNomeEmpresaParceira(e.target.value)}
                            />
                        </div>
                        <div className="fieldEmpresa">
                            <label className="labelEditEmpresa" id="razaoSocial">Razão Social:</label>
                            <input
                                className="inputEmpresa"
                                placeholder="digite a Razao Social"
                                type="text"
                                value={razaoSocial}
                                onChange={(e) => setRazaoSocial(e.target.value)}
                            />
                        </div>
                        <div className="fieldEmpresa">
                            <label className="labelEditEmpresa" id="cnpj">CNPJ:</label>
                            <input
                                className="inputEmpresa"
                                placeholder="digite o CNPJ"
                                type="text"
                                maxLength="20"
                                value={cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
                            />
                        </div>
                        <div className="fieldEmpresa">
                            <label className="labelEditEmpresa" id="status">Status:</label>
                            <input
                                className="inputEmpresa"
                                placeholder="digite o status"
                                type="text"
                                maxLength="20"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                    </form>
                </div>

                {/* Campos de preenchimento de endereço do empresa */}
                <div id="enderecoEmpresa">
                <div className="empresaEndTitle">
                        <h2>Endereço</h2>
                    </div>
                    <div className="empresaEnd">
                        <form className="formEmpresaEnd" onSubmit={handleSubmit}>
                            <div className="fieldEmpresaEnd">
                                <label className="labelEditEmpresaEnd" id="cep">CEP:</label>
                                <input
                                    className="inputEmpresaEnd"
                                    placeholder="digite o CEP"
                                    type="text"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                />
                            </div>
                            <div className="fieldEmpresaEnd">
                                <label className="labelEditEmpresaEnd" id="estado">Estado:</label>
                                <input
                                    className="inputEmpresaEnd"
                                    placeholder="digite o Estado"
                                    type="text"
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </div>
                            <div className="fieldEmpresaEnd">
                                <label className="labelEditEmpresaEnd" id="cidade">Cidade:</label>
                                <input
                                    className="inputEmpresaEnd"
                                    placeholder="digite a cidade"
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </div>
                            <div className="fieldEmpresaEnd">
                                <label className="labelEditEmpresaEnd" id="bairro">Bairro:</label>
                                <input
                                    className="inputEmpresaEnd"
                                    placeholder="digite o bairro"
                                    type="text"
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                />
                            </div>
                        </form>
                        <form className="formEmpresaEnd" onSubmit={handleSubmit}>
                            <div className="fieldEmpresaEnd">
                                <label className="labelEditEmpresaEnd" id="rua">Rua:</label>
                                <input
                                    className="inputEmpresaEnd"
                                    placeholder="digite a rua"
                                    type="text"
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)}
                                />
                            </div>
                            <div className="fieldEmpresaEnd">
                                <label className="labelEditEmpresaEnd" id="numero">Número:</label>
                                <input
                                    className="inputEmpresaEnd"
                                    placeholder="digite o número"
                                    type="text"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                />
                            </div>
                            <div className="fieldEmpresaEnd">
                                <label className="labelEditEmpresaEnd" id="complemento">Complemento:</label>
                                <input
                                    className="inputEmpresaEnd"
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

            {/* Botão de confirmação para o post do Empresa e botão para retornar a lista de empresas */}
            <footer id="confirmButtonEmpresa">
                <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmit}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button>
            </footer>
        </>
    )
}
export default EditarEmpresa