// import React, { useState, useEffect } from "react";
// import { GoListUnordered } from 'react-icons/go';
// import "./styles.css";

// //Import dos icones 
// import { BsArrowReturnLeft } from 'react-icons/bs';

// //Import dos CRUDS 
// import { getEmpresa } from "../../../services/crudClient";

// const EmpresaDetalhes = (props) => {
//     const [empresas, setEmpresaes] = useState([])

//     useEffect(() => {
//         (async () => {
//             const response = await getEmpresa()
//             setEmpresaes(response.data)
//             console.log(response)
//         })()
//     }, [])

//     return (
//         <>
//             <header id="headerCardEmpresa">
//                 <label className="headerCardEmpresa">Função:</label>
//                 <label className="headerCardEmpresaNome">| Nome:</label>
//                 <label className="headerCardEmpresaStatus">| Status:</label>
//             </header>

//             <div id="mainCardEmpresa">
//                 {empresas?.map((empresa, index) => (
//                     <div id="CardEmpresa" key={index}>
//                         <div className="CardEmpresaTexto">
//                         <h2 className="mainCardEmpresa">{empresa.cnpj}</h2>
//                             <h2 className="mainCardEmpresaNome">{empresa.nomeEmpresaParceira}</h2>
//                             <h2 className="mainCardEmpresaStatus">{empresa.cnpj}</h2>
//                             <div id="actionView">
//                                 <button className="buttonOrangeActionView" alt="Botão de visualizar empresa" onClick={props.event}>+<GoListUnordered /></button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Botão de confirmação para o post do Empresa */}
//             <footer id="buttonConfirm">
//                 <div className="confirm">
//                     <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
//                     {/* <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmitEndereco}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button> */}
//                 </div>
//             </footer>
//         </>
//     )
// }
// export default EmpresaDetalhes