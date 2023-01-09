import React, { useState, useEffect } from "react";
import "./styles.css";
import colmeia from "../../components/Images/colmeia.gif";
import zzz from "../../components/Images/zzz.gif";
import loading from "../../components/Images/loading.gif";

const Loading = () => {

    useEffect(() => {
        (async () => {
        })()
    }, [])


    return (
        <>

                <img className="loading" src={loading} />
            <div id="loading">
            <h1> Bzzz, Fique tranquila(o)! A colmeia está trabalhando o mais rápido possível para te entregar o mel! Bzzz </h1>
                <img className="zzz" src={zzz} />
            </div>


        </>
    )
}
export default Loading