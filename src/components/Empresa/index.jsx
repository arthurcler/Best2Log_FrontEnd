import React, { useState, useEffect } from "react";
import "./styles.css";

//Import dos Icones 
import { TbBuildingFactory2 } from 'react-icons/tb';
import { GoListUnordered } from 'react-icons/go';

// Import dos Componentes 
import EditarEmpresa from "./EditarEmpresa";
import EmpresaDetalhes from "./EmpresaDetalhes";
import CardEmpresa from "./CardEmpresa";

const Empresa = () => {
    const [title, setTitle] = useState("Empresas")
    const [viewClick, setViewClick] = useState(false)
    const [editClick, setEditClick] = useState(false)

    useEffect(() => {
        (async () => {
        })()
    }, [])

    const View = () => {
        setViewClick(true)
        setTitle("Visualizar Empresa")
    }

    const Return = () => {
        setViewClick(false)
        setEditClick(false)
        setTitle("Empresas")
    }

    const Render = () => {

        if (editClick) {
            return <EditarEmpresa return={Return} />
        } else {
            if (viewClick) {
                return <EmpresaDetalhes return={Return} />
            } else {
                return <CardEmpresa event={View} />
            }
        }
    }

    return (
        <>
            <header id="headerFuncionalidade">
                {/* Titulo do elemento renderizado */}
                <div className="tituloFuncionalidade">
                    <h1><TbBuildingFactory2 />{title}</h1>
                </div>

                {/* Botão de Cadastrar  */}
                <div id="actionNew">
                    <button className="buttonPurpleAction" alt="Botão de cadastrar" onClick={(e) => setEditClick(true) + setTitle("Cadastrar Empresa")} >Cadastrar <GoListUnordered /></button>
                </div>
            </header>

            <main id="mainEmpresa">
                {/* Renderização condicional */}
                <div className="formCadastro">
                    {Render()}
                </div>
            </main>
        </>
    )
}
export default Empresa