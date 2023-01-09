import React, { useState, useEffect } from "react";
import "./styles.css";

//Import dos icones 
import { GoListUnordered } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

//Import dos CRUDS 
import { getMapaCarga } from "../../../services/crudClient";

const MapaCargaDetalhes = (props) => {
    const [centroDistribuicoes, setmapasCargas] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getMapaCarga()
            setmapasCargas(response.data)
            console.log(response)
        })()
    }, [])

    return (
        <>
            <header id="headerCardMapaCarga">
                <label className="headerCardMapaCargaNome">| Nome:</label>
                <label className="headerCardMapaCargaStatus">| Bairros Associados:</label>
            </header>

            <div id="mainCardMapaCarga">
                {centroDistribuicoes?.map((mapaCarga, index) => (
                    <div id="CardMapaCarga" key={index}>
                        <div className="CardMapaCargaTexto">
                        <h2 className="mainCardMapaCarga">{mapaCarga.nomeMapaCarga}</h2>
                            <h2 className="mainCardMapaCargaNome">{mapaCarga.bairrosAssociados}</h2>
                            <div id="actionView">
                                <button className="buttonOrangeActionView" alt="Botão de visualizar Mapa de Carga" onClick={props.event}>+<GoListUnordered /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão de confirmação para o post do MapaCarga */}
            <footer id="buttonConfirm">
                <div className="confirm">
                    <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                    {/* <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmitEndereco}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button> */}
                </div>
            </footer>
        </>
    )
}
export default MapaCargaDetalhes