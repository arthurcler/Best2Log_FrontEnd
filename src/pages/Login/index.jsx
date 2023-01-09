import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import colmeia from "../../components/Images/colmeia.gif";
import { AuthContext } from "../../contexts/auth";
import { FaTruck, FaBoxOpen, FaUserShield, FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineChecklistRtl } from 'react-icons/md';
import "./styles.css";

const Login = () => {
    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [icon, setIcon] = useState(<FaRegUserCircle />)

    // Diferenciação de rotas de acordo com o email do colaborador
    useEffect(() => {
        if (email.includes("@adm")) {
            setIcon(<FaUserShield />)
    
        } else if (email.includes("@con")) {
            setIcon(<MdOutlineChecklistRtl />)
            
        } else if (email.includes("@est")) {
            setIcon(<FaBoxOpen />)
            
        } else if (email.includes("@mot")) {
            setIcon(<FaTruck />)
        }
    },[email])

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("submit", { email, senha })
        login(email, senha)
    }

    return (
        <>
            <div id="login">
                <Header />
                <div className="loginCard">
                    <div className="colmeiaCard">
                        <img className="colmeia" src={colmeia} alt="Gif de um urso tentando pegar o mel de uma colmeia!" />
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="loginIcon">
                            <h1>{icon}</h1>
                        </div>
                        <div className="loginField">
                            {/* <h3 className="fraseDeEfeito">Ter uma melhora constante é melhor do que a perfeição adiada</h3> */}
                            {/* <h5>Mark Twain</h5> */}
                            <h2> Bem vindo, tenha um excelente dia de trabalho!</h2>
                            <div className="field">
                                <label htmlFor="email" id="email">Email:</label>
                                <input
                                    placeholder="email@função.com"
                                    type="email"
                                    name="email"
                                    id="email"
                                    alt="Digite seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="senha" id="email">Senha:</label>
                                <input
                                    placeholder="digite sua senha"
                                    type="password"
                                    name="senha"
                                    id="senha"
                                    alt="Digite sua senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                            <div id="buttonLogin" className="actions">
                                <button className="buttonLogin" type="submit" alt="Botão de entrar">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Login