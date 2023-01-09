import React from "react";
import { CgBee } from 'react-icons/cg';
import "./styles.css";


function Header() {

    return (
        <>
            <div id="mark">
                <div className="beeIcon"><CgBee /></div>
                <h2>Best2Log</h2>
            </div>
        </>
    )
}
export default Header