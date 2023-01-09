import React, { useState, useEffect } from "react";
import "./styles.css";

//Import dos Icones 
import { GoListUnordered } from 'react-icons/go';
import { GiCardboardBox } from 'react-icons/gi';

// Import dos Componentes 
import EditarProduto from "./EditarProduto";
import CardProduto from "./CardProduto";

const Produto = () => {
    const [title, setTitle] = useState("Produtos")
    const [viewClick, setViewClick] = useState(false)
    const [editClick, setEditClick] = useState(false)

    useEffect(() => {
        (async () => {
        })()
    }, [])
    
    // Essa função determina o elemento que será renderizado de acordo com state viewClick,
    // que é acionado com o botão Return(<ProdutoDetalhes />) e o botão Visualizar(<CardProduto />)
    const View = () => {
        setViewClick(true)
        setTitle("Visualizar Produto")
    }

    const Return = () => {
        setViewClick(false)
        setEditClick(false)
        setTitle("Produtos")
    }

    const Render = () => {
        if (editClick) {
            return <EditarProduto return={Return} />
        } else {
            if (viewClick) {
                return <div>Em construção</div>
            } else {
                // return <div>Em construção</div>
                return <CardProduto event={View} />
            }
        }
    }


    return (
        <>
            <header id="headerFuncionalidade">
                {/* Titulo do elemento renderizado */}
                <div className="tituloFuncionalidade">
                    <h1><GiCardboardBox /> {title}</h1>
                </div>
                
                {/* Botão de Cadastrar  */}
                <div id="actionNew">
                    <button className="buttonPurpleAction" alt="Botão de cadastrar" onClick={(e) => setEditClick(true) + setTitle("Cadastrar Produto")} >Cadastrar <GoListUnordered /></button>
                </div>
            </header>

            <main id="mainColaborador">
                {/* Renderização condicional */}
                <div className="formCadastro">
                    {Render()}
                </div>
            </main>
        </>
    )
}
export default Produto