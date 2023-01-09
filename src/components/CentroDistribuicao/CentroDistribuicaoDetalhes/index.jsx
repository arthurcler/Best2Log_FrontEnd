import React, { useState, useEffect } from "react";
import "./styles.css";

//Import dos icones 
import { GoListUnordered } from 'react-icons/go';
import { BsArrowReturnLeft } from 'react-icons/bs';

//Import dos CRUDS 
import { getCentroDistribuicao } from "../../../services/crudClient";

const CentroDistribuicaoDetalhes = (props) => {
    const [centroDistribuicoes, setCentroDistribuicoes] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getCentroDistribuicao()
            setCentroDistribuicoes(response.data)
            console.log(response)
        })()
    }, [])

    return (
        <>
            <header id="headerCardCentroDistribuicao">
                <label className="headerCardCentroDistribuicaoNome">| Nome:</label>
                <label className="headerCardCentroDistribuicaoStatus">| Bairros Associados:</label>
            </header>

            <div id="mainCardCentroDistribuicao">
                {centroDistribuicoes?.map((centroDistribuicao, index) => (
                    <div id="CardCentroDistribuicao" key={index}>
                        <div className="CardCentroDistribuicaoTexto">
                        <h2 className="mainCardCentroDistribuicao">{centroDistribuicao.nomeCentroDistribuicao}</h2>
                            <h2 className="mainCardCentroDistribuicaoNome">{centroDistribuicao.bairrosAssociados}</h2>
                            <div id="actionView">
                                <button className="buttonOrangeActionView" alt="Botão de visualizar centroDistribuicao" onClick={props.event}>+<GoListUnordered /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão de confirmação para o post do CentroDistribuicao */}
            <footer id="buttonConfirm">
                <div className="confirm">
                    <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
                    {/* <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmitEndereco}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button> */}
                </div>
            </footer>
        </>
    )
}
export default CentroDistribuicaoDetalhes