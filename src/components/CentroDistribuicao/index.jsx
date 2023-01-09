import React, { useState, useEffect } from "react";
import "./styles.css"

//Import dos Icones 
import { TbRoute } from 'react-icons/tb';
import { GoListUnordered } from 'react-icons/go';

// Import dos Componentes 
import EditarCentroDistribuicao from "./EditarCentroDistribuicao";
import CentroDistribuicaoDetalhes from "./CentroDistribuicaoDetalhes";
import CardCentroDistribuicao from "./CardCentroDistribuicao";

const CentroDistribuicao = () => {
    const [title, setTitle] = useState("Centros de Distribuição")
    const [viewClick, setViewClick] = useState(false)
    const [editClick, setEditClick] = useState(false)

    useEffect(() => {
        (async () => {
        })()
    }, [])

    // Essa função determina o elemento que será renderizado de acordo com state viewClick,
    // que é acionado com o botão Return(<CentroDistribuicaoDetalhes />) e o botão Visualizar(<CardCentroDistribuicao />)
    const View = () => {
        setViewClick(true)
        setTitle("Visualizar Centro de Distribuição")
    }

    const Return = () => {
        setViewClick(false)
        setEditClick(false)
        setTitle("Centro de Distribuição")
    }

    const Render = () => {
        if (editClick) {
            return <EditarCentroDistribuicao return={Return} />
        } else {
            if (viewClick) {
                return <CentroDistribuicaoDetalhes return={Return} />
            } else {
                return <CardCentroDistribuicao event={View} />
            }
        }
    }

    return (
        <>
            <header id="headerFuncionalidade">
                {/* Titulo do elemento renderizado */}
                <div className="tituloFuncionalidade">
                    <h1><TbRoute /> {title}</h1>
                </div>
                <div id="actionNew">
                    <button className="buttonPurpleAction" alt="Botão de Cadastrar" onClick={(e) => setEditClick(true) + setTitle("Cadastrar Centro de Distribuição")} >Cadastrar <GoListUnordered /></button>
                </div>
            </header>
            <main id="mainCentroDistribuicao">
                {/* Renderização condicional */}
                <div className="formCadastro">
                    {Render()}
                </div>
            </main>
        </>
    )
}
export default CentroDistribuicao