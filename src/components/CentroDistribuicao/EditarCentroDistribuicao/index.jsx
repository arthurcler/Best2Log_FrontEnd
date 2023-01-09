import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos icones
import { GoCheck } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import CRUD POST
import { postCentro } from '../../../services/crudClient'

const EditarCentroDistribuicao = (props) => {

    const [nomeCentroDistribuicao, setNomeCentroDistribuicao] = useState("")

    // Endereço
    const [cep, setCep] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("")

    // Função CRUD da api para post dos dados do centroDistribuicao
    useEffect(() => {
        (async () => {
            const data = await postCentro()
        })()
    }, [])

    // Função CRUD da api para post do centro
    const handleSubmit = async (e) => {
        if (
            nomeCentroDistribuicao !== ""
            & cep !== ""
            & estado !== ""
            & cidade !== ""
            & rua !== ""
            & numero !== ""
            & complemento !== ""
            & bairro !== "") {

            e.preventDefault()

            const postCentro = {
                nomeCentroDistribuicao: nomeCentroDistribuicao,
                endereco: {
                    cep: cep,
                    cidade: cidade,
                    estado: estado,
                    logradouro: rua,
                    numero: numero,
                    complemento: complemento,
                    bairro: bairro,
                }
            }

            console.log("post Centro: ", postCentro)
            alert("Cadastrado com sucesso")

        }
    }

    return (
        <>
            <main id="formularios">
                {/* Campos de preenchimento de informações pessoais do centroDistribuicao */}
                <div id="dadosCentro">
                    <h2>Dados do CD</h2>
                    <form className="formCentro" onSubmit={handleSubmit}>
                        <div className="fieldCentro">
                            <label className="labelEditCentro" id="nome">Nome:</label>
                            <input
                                className="inputCentro"
                                placeholder="digite o nome do CD"
                                type="text"
                                value={nomeCentroDistribuicao}
                                onChange={(e) => setNomeCentroDistribuicao(e.target.value)}
                            />
                        </div>
                    </form>
                </div>

                {/* Campos de preenchimento de endereço do centroDistribuicao */}
                <div id="enderecoCentro">
                    <div className="centroEndTitle">
                        <h2>Endereço</h2>
                    </div>
                    <div className="centroEnd">
                        <form className="formCentroEnd" onSubmit={handleSubmit}>
                            <div className="fieldCentroEnd">
                                <label className="labelEditCentroEnd" id="cep">CEP:</label>
                                <input
                                    className="inputCentroEnd"
                                    placeholder="digite o CEP"
                                    type="text"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                />
                            </div>
                            <div className="fieldCentroEnd">
                                <label className="labelEditCentroEnd" id="estado">Estado:</label>
                                <input
                                    className="inputCentroEnd"
                                    placeholder="digite o Estado"
                                    type="text"
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </div>
                            <div className="fieldCentroEnd">
                                <label className="labelEditCentroEnd" id="cidade">Cidade:</label>
                                <input
                                    className="inputCentroEnd"
                                    placeholder="digite a cidade"
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </div>
                            <div className="fieldCentroEnd">
                                <label className="labelEditCentroEnd" id="bairro">Bairro:</label>
                                <input
                                    className="inputCentroEnd"
                                    placeholder="digite o bairro"
                                    type="text"
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                />
                            </div>
                        </form>
                        <form className="formCentroEnd" onSubmit={handleSubmit}>
                            <div className="fieldCentroEnd">
                                <label className="labelEditCentroEnd" id="rua">Rua:</label>
                                <input
                                    className="inputCentroEnd"
                                    placeholder="digite a rua"
                                    type="text"
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)}
                                />
                            </div>
                            <div className="fieldCentroEnd">
                                <label className="labelEditCentroEnd" id="numero">Número:</label>
                                <input
                                    className="inputCentroEnd"
                                    placeholder="digite o número"
                                    type="text"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                />
                            </div>
                            <div className="fieldCentroEnd">
                                <label className="labelEditCentroEnd" id="complemento">Complemento:</label>
                                <input
                                    className="inputCentroEnd"
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

            {/* Botão de confirmação para o post do CentroDistribuicao e botão para retornar a lista de centroDistribuicaoes */}
            <footer id="confirmButtonCentro">
                <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmit}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button>
            </footer>
        </>
    )
}

export default EditarCentroDistribuicao