import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos icones
import { GoCheck } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import CRUD POST
// import { postColaborador } from "../../../services/crudClient";
import { api } from "../../../../services/api";

const EditarColaborador = (props) => {

    // Dados pessoais
    const [nomeColaborador, setNomeColaborador] = useState("")
    const [cpf, setCpf] = useState("")
    const [rg, setRg] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [funcao, setFuncao] = useState("")

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
            // const data = await postColaborador()
            // console.log("o que é o post:", data)
        })()
    }, [])

    // Função CRUD da api para post do colaborador
    const handleSubmit = async (e) => {
        if (
            nomeColaborador !== ""
            & cpf !== ""
            & rg !== ""
            & email !== ""
            & password !== ""
            & funcao !== ""
            & cep !== ""
            & estado !== ""
            & cidade !== ""
            & rua !== ""
            & numero !== ""
            & complemento !== ""
            & bairro !== "") {

            e.preventDefault()

            const postColaborador = {
                nomeFuncionario: nomeColaborador,
                emailFuncionario: email,
                senhaFuncionario: password,
                funcaoFuncionario: funcao,
                cpfFuncionario: cpf,
                rgFuncionario: rg,

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
            await api.post("/auth/registro", postColaborador)
            alert("Cadastrado com sucesso")
        }
    }

    return (
        <>
            <main id="formularios">
                {/* Campos de preenchimento de informações pessoais do colaborador */}
                <div id="dadosPessoais">
                    <h2>Dados Pessoais</h2>
                    <form className="formColaborador" onSubmit={handleSubmit}>
                        <div className="fieldColaborador">
                            <label className="labelEditColaborador" id="nome">Nome:</label>
                            <input
                                className="inputColaborador"
                                placeholder="digite o nome"
                                type="text"
                                value={nomeColaborador}
                                onChange={(e) => setNomeColaborador(e.target.value)}
                            />
                        </div>
                        <div className="fieldColaborador">
                            <label className="labelEditColaborador" id="cpf">CPF:</label>
                            <input
                                className="inputColaborador"
                                placeholder="digite o CPF"
                                type="text"
                                maxLength="11"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                        <div className="fieldColaborador">
                            <label className="labelEditColaborador" id="rg">RG:</label>
                            <input
                                className="inputColaborador"
                                placeholder="digite o RG"
                                type="text"
                                maxLength="11"
                                value={rg}
                                onChange={(e) => setRg(e.target.value)}
                            />
                        </div>
                        <div className="fieldColaborador">
                            <label className="labelEditColaborador" id="email">Email:</label>
                            <input
                                className="inputColaborador"
                                placeholder="digite o email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="fieldColaborador">
                            <label className="labelEditColaborador" id="password">Senha:</label>
                            <input
                                className="inputColaborador"
                                placeholder="digite a senha"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="fieldColaborador">
                            <label className="labelEditColaborador" id="Funcao">Função:</label>
                            <input
                                className="inputColaborador"
                                placeholder="digite a função"
                                type="text"
                                value={funcao}
                                onChange={(e) => setFuncao(e.target.value)}
                            />
                        </div>
                    </form>
                </div>

                {/* Campos de preenchimento de endereço do colaborador */}
                <div id="enderecoColaborador">
                    <div className="colaboradorEndTitle">
                        <h2>Endereço</h2>
                    </div>
                    <div className="colaboradorEnd">
                        <form className="formColaboradorEnd" onSubmit={handleSubmit}>
                            <div className="fieldColaboradorEnd">
                                <label className="labelEditColaboradorEnd" id="cep">CEP:</label>
                                <input
                                    className="inputColaboradorEnd"
                                    placeholder="digite o CEP"
                                    type="text"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                />
                            </div>
                            <div className="fieldColaboradorEnd">
                                <label className="labelEditColaboradorEnd" id="estado">Estado:</label>
                                <input
                                    className="inputColaboradorEnd"
                                    placeholder="digite o Estado"
                                    type="text"
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </div>
                            <div className="fieldColaboradorEnd">
                                <label className="labelEditColaboradorEnd" id="cidade">Cidade:</label>
                                <input
                                    className="inputColaboradorEnd"
                                    placeholder="digite a cidade"
                                    type="text"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </div>
                            <div className="fieldColaboradorEnd">
                                <label className="labelEditColaboradorEnd" id="bairro">Bairro:</label>
                                <input
                                    className="inputColaboradorEnd"
                                    placeholder="digite o bairro"
                                    type="text"
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                />
                            </div>
                        </form>
                        <form className="formColaboradorEnd" onSubmit={handleSubmit}>
                            <div className="fieldColaboradorEnd">
                                <label className="labelEditColaboradorEnd" id="rua">Rua:</label>
                                <input
                                    className="inputColaboradorEnd"
                                    placeholder="digite a rua"
                                    type="text"
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)}
                                />
                            </div>
                            <div className="fieldColaboradorEnd">
                                <label className="labelEditColaboradorEnd" id="numero">Número:</label>
                                <input
                                    className="inputColaboradorEnd"
                                    placeholder="digite o número"
                                    type="text"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                />
                            </div>
                            <div className="fieldColaboradorEnd">
                                <label className="labelEditColaboradorEnd" id="complemento">Complemento:</label>
                                <input
                                    className="inputColaboradorEnd"
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

            {/* Botão de confirmação para o post do Colaborador e botão para retornar a lista de colaboradores */}
            <footer id="confirmButtonColab">
                <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmit}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button>
            </footer>
        </>
    )
}
export default EditarColaborador