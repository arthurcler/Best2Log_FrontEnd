import React, { useState, useEffect } from "react";
import "./styles.css";

// Import dos icones
import { GoCheck } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

// Import CRUD POST
import { postMapaCarga } from '../../../../services/crudClient'

const EditarMapaCarga = (props) => {

    const [data, setData] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
    }, [])

    // Função CRUD da api para post dos dados do mapaCarga
    const handleSubmit = (e) => {
        e.preventDefault()
        (async () => {
            const response = await postMapaCarga()
            postMapaCarga(response)
            console.log(response)
        })()
    }

    return (
        <>
            <main id="formularios">
                {/* Campos de preenchimento de informações pessoais do mapaCarga */}
                <div id="dadosMapaCarga">
                    <h2>Dados do Mapa de Carga</h2>
                    <form className="formCarga" onSubmit={handleSubmit}>
                        <div className="fieldCarga">
                            <label className="labelEditCarga" id="data">Data:</label>
                            <input
                                className="inputCarga"
                                // placeholder="digite o nome"
                                type="data"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                        </div>
                    </form>
                    
                    <form className="formCarga" onSubmit={handleSubmit}>
                        <div className="fieldCarga">
                            <label className="labelEditCarga" id="status">Status:</label>
                            <input
                                className="inputCarga"
                                // placeholder="digite o nome"
                                type="text"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </main>

            {/* Botão de confirmação para o post do MapaCarga e botão para retornar a lista de mapaCargaes */}
            <footer id="confirmButtonCarga">
                    <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                    <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmit}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button>
            </footer>
        </>
    )
}
export default EditarMapaCarga