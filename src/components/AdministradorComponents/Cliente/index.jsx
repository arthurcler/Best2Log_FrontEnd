import React, { useState, useEffect } from "react";
import "./styles.css";

//Import dos Icones 
import { GoListUnordered } from 'react-icons/go';
import { HiOutlineUserGroup } from 'react-icons/hi';

// Import dos Componentes 
import EditarCliente from "./EditarCliente";
import CardCliente from "./CardCliente";

const Cliente = () => {
    const [title, setTitle] = useState("Clientes")
    const [viewClick, setViewClick] = useState(false)
    const [editClick, setEditClick] = useState(false)

    useEffect(() => {
        (async () => {
        })()
    }, [])

    // Essa função determina o elemento que será renderizado de acordo com state viewClick,
    // que é acionado com o botão Return(<ClienteDetalhes />) e o botão Visualizar(<CardCliente />)
    const View = () => {
        setViewClick(true)
        setTitle("Visualizar Cliente")
    }

    const Return = () => {
        setViewClick(false)
        setEditClick(false)
        setTitle("Clientes")
    }

    const Render = () => {
        if (editClick) {
            return <EditarCliente return={Return} />
        } else {
            if (viewClick) {
                return <h1>Em construção</h1>
            } else {
                return <CardCliente event={View} />
            }
        }
    }

    return (
        <>
            <header id="headerFuncionalidade">
                {/* Titulo do elemento renderizado */}
                <div className="tituloFuncionalidade">
                    <h1><HiOutlineUserGroup /> {title}</h1>
                </div>

                {/* Botão de Cadastrar  */}
                <div id="actionNew">
                    <button className="buttonPurpleAction" alt="Botão de cadastrar" onClick={(e) => setEditClick(true) + setTitle("Cadastrar Cliente")} >Cadastrar <GoListUnordered /></button>
                </div>
            </header>

            <main id="mainCliente">
                {/* Renderização condicional */}
                <div className="formCadastro">
                    {Render()}
                </div>
            </main>
        </>
    )
}
export default Cliente