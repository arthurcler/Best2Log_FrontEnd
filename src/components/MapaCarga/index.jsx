import React, { useState, useEffect } from "react";
import "./styles.css"

//Import dos Icones 
import { TfiMapAlt } from 'react-icons/tfi';
import { GoListUnordered } from 'react-icons/go';

// Import dos Componentes 
import EditarMapaCarga from "./EditarMapaCarga";
import MapaCargaDetalhes from "./MapaCargaDetalhes";
import CardMapaCarga from "./CardMapaCarga";

const MapaCarga = () => {
    const [title, setTitle] = useState("Mapa de Carga")
    const [viewClick, setViewClick] = useState(false)
    const [editClick, setEditClick] = useState(false)

    useEffect(() => {
        (async () => {
        })()
    }, [])

    const View = () => {
        setViewClick(true)
        setTitle("Visualizar Mapa de Carga")
    }

    const Return = () => {
        setViewClick(false)
        setEditClick(false)
        setTitle("Mapa de Carga")
    }

    const Render = () => {
        if (editClick) {
            return <EditarMapaCarga return={Return} />
        } else {
            if (viewClick) {
                return <MapaCargaDetalhes return={Return} />
            } else {
                return <CardMapaCarga event={View} />
            }
        }
    }

    return (
        <>
            <header id="headerFuncionalidade">
                {/* Titulo do elemento renderizado */}
                <div className="tituloFuncionalidade">
                    <h1><TfiMapAlt /> {title}</h1>
                </div>
                <div id="actionNew">
                    <button className="buttonPurpleAction" alt="Botão de confirmar" onClick={(e) => setEditClick(true) + setTitle("Cadastrar Mapa de Carga")} >Cadastrar <GoListUnordered /></button>
                </div>
            </header>
            <main id="mainMapaCarga">
                {/* Renderização condicional */}
                <div className="formCadastro">
                    {Render()}
                </div>
            </main>
        </>
    )
}
export default MapaCarga