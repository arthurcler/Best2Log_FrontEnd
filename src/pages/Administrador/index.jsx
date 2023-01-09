import React, { useState, useEffect, useContext } from "react";
import useLocalStorage from 'use-local-storage';
import "./styles.css";

//Import icones
import { BiUser } from 'react-icons/bi';
import { TbRoute, TbBuildingFactory2 } from 'react-icons/tb';
import { TfiMapAlt } from 'react-icons/tfi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaUserShield } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GiCardboardBox } from 'react-icons/gi';

//Import Segurança
import { AuthContext } from "../../contexts/auth";

//Import componentes
import Empresa from "../../components/AdministradorComponents/Empresa";
import Colaborador from "../../components/AdministradorComponents/Colaborador";
import CentroDistribuicao from "../../components/AdministradorComponents/CentroDistribuicao";
import MapaCarga from "../../components/AdministradorComponents/MapaCarga";
import Loading from "../../components/Loading";
import Produto from "../../components/AdministradorComponents/Produto";
import Cliente from "../../components/AdministradorComponents/Cliente";
import OrdemEntrega from "../../components/AdministradorComponents/OrdemEntrega";

const Administrador = () => {
    const { logout } = useContext(AuthContext)
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")
    const [loading, setLoading] = useState(true)
    const [renderElement, setRenderElement] = useState("CO")

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
        switch (renderElement) {
            case "OE":
                return <OrdemEntrega />
            case "MC":
                return <MapaCarga />
            case "EP":
                return <Empresa />
            case "CD":
                return <CentroDistribuicao />
            case "PD":
                return <Produto />
            case "CL":
                return <Cliente />
            default:
                return <Colaborador />
        }
    }

    return (
        <div className="theme" data-theme={theme} >
            <header id="header" className="theme-toggle">
                <h2 className="accessLogado"><FaUserShield /> Administrador</h2>
                <input onClick={switchTheme} className="toggleButton" type="checkbox" />
                <button id="buttonLog" className="buttonLogout" onClick={handleLogout}>Logout</button>
            </header>

            <main id="mainAdministrador">
                <div className="formCadastro">
                    {renderConditionally()}
                </div>
            </main>

            <aside className="aside">
                <div id="objective">
                    <button className="buttonBlue" value={"OE"} onClick={(e) => setRenderElement(e.target.value)}>Ordem de entrega <HiOutlineDocumentText /></button>
                    <button className="buttonOrange" value={"MC"} onClick={(e) => setRenderElement(e.target.value)}>Mapa de Carga <TfiMapAlt /></button>
                    <button className="buttonRed" value={"EP"} onClick={(e) => setRenderElement(e.target.value)}>Empresa <TbBuildingFactory2 /></button>
                    <button className="buttonPurple" value={"CD"} onClick={(e) => setRenderElement(e.target.value)}>Centro de <br /> distribuição <TbRoute /></button>
                    <button className="buttonBlue" value={"CO"} onClick={(e) => setRenderElement(e.target.value)}>Colaborador <BiUser /></button>
                    <button className="buttonOrange" value={"PD"} onClick={(e) => setRenderElement(e.target.value)}>Produtos <GiCardboardBox /></button>
                    <button className="buttonPurple" value={"CL"} onClick={(e) => setRenderElement(e.target.value)}>Clientes <HiOutlineUserGroup /></button>
                </div>
            </aside>
        </div>
    )
}
export default Administrador