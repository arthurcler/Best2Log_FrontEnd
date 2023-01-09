import React, { useState, useEffect, useContext } from "react";
import useLocalStorage from 'use-local-storage';
import "./styles.css";

//Import icones
import { FaTruck, FaBoxOpen } from 'react-icons/fa';
import { FaRegEnvelopeOpen } from 'react-icons/fa';

//Import Segurança
import { AuthContext } from "../../contexts/auth";

//Import componentes
import Loading from "../../components/Loading";
import OrdemEntrega from "../../components/MotoristaComponents/OrdemEntrega";

const Motorista = () => {
    const { logout } = useContext(AuthContext)
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")
    const [loading, setLoading] = useState(true)
    const [render, setRender] = useState("OE")

    useEffect(() => {
        // modelo para contornar o async:
        (async () => {
        })()
        setLoading(false)
    }, [])

    // Função para alteração do tema
    const switchTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme)
    }

    const handleLogout = () => {
        logout()
    }

    if (loading) {
        return <Loading />
    }

    // Renderização condicional de acordo com o botão clicado
    function renderConditionally() {
        if (render === "OE") {
            return <OrdemEntrega />
        } else {
            // return <MapaCarga />
            return <div>Em construção</div>
        }
    }


    return (
        <div className="theme" data-theme={theme} >
            <header id="header" className="theme-toggle">
                <h2 className="accessLogado"><FaBoxOpen /> Motorista</h2>
                <input onClick={switchTheme} className="toggleButton" type="checkbox" />
                <button id="buttonLog" className="buttonLogout" onClick={handleLogout}>Logout</button>
            </header>

            <main id="mainConferente">
                <div className="formCadastroEstoquista">
                    {renderConditionally()}
                </div>
            </main>

            <aside className="aside">
                <div id="objective">
                    <button className="buttonBlue" value={"OE"} onClick={(e) => setRender(e.target.value)}> Ordem de Entrega <FaRegEnvelopeOpen /></button>
                    <button className="buttonRed" value={"MP"} onClick={(e) => setRender(e.target.value)}> Mapa de Carga <FaTruck /></button>
                </div>
            </aside>

            <footer id="actionReturn">
                {/* <button className="buttonVoltar">Voltar</button> */}
            </footer>
        </div>
    )
}
export default Motorista