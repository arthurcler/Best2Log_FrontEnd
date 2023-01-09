import React, { useState, useEffect } from "react";
import "./styles.css";

//Import dos Icones 
import { HiOutlineDocumentText } from 'react-icons/hi';
import { GoListUnordered } from 'react-icons/go';

// Import dos Componentes 
import EditarOrdemEntrega from "./EditarOrdemEntrega";
import CardOrdemEntrega from "./CardOrdemEntrega";
import OrdemEntregaDetalhes from "./OrdemEntregaDetalhes";

const OrdemEntrega = () => {
    const [title, setTitle] = useState("Ordens de Entrega")
    const [viewClick, setViewClick] = useState(false)
    const [editClick, setEditClick] = useState(false)

    useEffect(() => {
        (async () => {
        })()
    }, [])
    
    // Essa função determina o elemento que será renderizado de acordo com state viewClick,
    // que é acionado com o botão Return(<OrdemDetalhes />) e o botão Visualizar(<CardOrdem />)
    const View = () => {
        setViewClick(true)
        setTitle("Visualizar Ordem")
    }

    const Return = () => {
        setViewClick(false)
        setEditClick(false)
        setTitle("Ordens de Entrega")
    }

    const Render = () => {
        if (editClick) {
            return <EditarOrdemEntrega return={Return} />
        } else {
            if (viewClick) {
                return <OrdemEntregaDetalhes return={Return} />
            } else {
                return <CardOrdemEntrega event={View} />
            }
        }
    }

    return (
        <>
            <header id="headerFuncionalidade">
                {/* Titulo do elemento renderizado */}
                <div className="tituloFuncionalidade">
                    <h1><HiOutlineDocumentText />{title}</h1>
                </div>
                
                {/* Botão de Cadastrar  */}
                <div id="actionNew">
                    <button className="buttonPurpleAction" alt="Botão de cadastrar" onClick={(e) => setEditClick(true) + setTitle("Cadastrar Ordem")} >Cadastrar <GoListUnordered /></button>
                </div>
            </header>

            <main id="mainOrdem">
                {/* Renderização condicional */}
                <div className="formCadastro">
                    {Render()}
                </div>
            </main>
        </>
    )
}
export default OrdemEntrega