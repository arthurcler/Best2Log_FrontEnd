import React, { useState, useEffect, useContext } from "react";
import useLocalStorage from 'use-local-storage';
import "./styles.css";

//Import icones
import { MdOutlineFreeBreakfast, MdOutlineChecklistRtl } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaRegEnvelopeOpen } from 'react-icons/fa';

//Import Segurança
import { AuthContext } from "../../contexts/auth";

//Import componentes
import Loading from "../../components/Loading";
import OrdemAberta from "../../components/ConferenteComponents/OrdemAberta";
import OrdemConfirmada from "../../components/ConferenteComponents/OrdemConfirmada";

const Conferente = () => {
    const { logout } = useContext(AuthContext)
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")
    const [loading, setLoading] = useState(true)
    const [render, setRender] = useState("OA")

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
        if (render === "OA") {
            return <OrdemAberta />
        } else {
            return <OrdemConfirmada />
        }
    }


    return (
        <div className="theme" data-theme={theme} >
            <header id="header" className="theme-toggle">
                <h2 className="accessLogado"><MdOutlineChecklistRtl /> Conferente</h2>
                <input onClick={switchTheme} className="toggleButton" type="checkbox" />
                <button id="buttonLog" className="buttonLogout" onClick={handleLogout}>Logout</button>
            </header>

            <main id="mainConferente">
                <div className="formCadastroOrdem">
                    {renderConditionally()}
                </div>
            </main>

            <aside className="aside">
                <div id="objective">
                    <h1 className="objectiveTitle">Ordens <br />de entrega <HiOutlineDocumentText /></h1>
                    <button className="buttonBlue" value={"OA"} onClick={(e) => setRender(e.target.value)}>Abertas <FaRegEnvelopeOpen /></button>
                    <button className="buttonRed" value={"OC"} onClick={(e) => setRender(e.target.value)}>Confirmadas <MdOutlineFreeBreakfast /></button>
                </div>
            </aside>

            <footer id="actionReturn">
                {/* <button className="buttonVoltar">Voltar</button> */}
            </footer>
        </div>
    )
}
export default Conferente