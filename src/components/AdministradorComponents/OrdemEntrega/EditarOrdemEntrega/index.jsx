// import React, { useState, useEffect } from "react";
// import "./styles.css";

// // Import dos icones
// import { GoCheck } from 'react-icons/go';
// import { BsArrowReturnLeft } from 'react-icons/bs';

// // Import CRUD POST
// import { api } from '../../../services/api'

// const EditarOrdem = (props) => {

//     // Dados
//     const [quantidade, setQuantidade] = useState("")
//     const [idCliente, setIdCliente] = useState("")
//     const [idProduto, setIdProduto] = useState("")
//     const [idEmpresaParceira, setIdEmpresaParceira] = useState("")

//     useEffect(() => {
//     }, [])

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const postOrdem = {
//             quantidade: quantidade,

//             clienteDTO: {
//                 idCliente: 1,
//             },
//             produtoDTO: {
//                 idProduto: 1
//             },
//             remetente: {
//                 idEmpresaParceira: 1,
//             }
//         }


//         console.log(postOrdem)
//         await api.post("/entrega_produto/dto", postOrdem)
//         alert("Cadastrado com sucesso")
//     }

//     return (
//         <>
//             <main id="formularios">
//                 {/* Campos de preenchimento de informações pessoais do mapaOrdem */}
//                 <div id="dadosOrdem">
//                     <h2>Dados do Mapa de Ordem</h2>
//                     <form className="formOrdem" onSubmit={handleSubmit}>
//                         <div className="fieldOrdem">
//                             <label className="labelEditOrdem" id="qtd">Quantidade:</label>
//                             <input
//                                 className="inputOrdem"
//                                 placeholder="digite a quantidade"
//                                 type="text"
//                                 value={quantidade}
//                                 onChange={(e) => setQuantidade(e.target.value)}
//                             />
//                         </div>
//                         <div className="fieldOrdem">
//                             <label className="labelEditOrdem" id="idCliente">ID Cliente:</label>
//                             <input
//                                 className="inputOrdem"
//                                 placeholder="digite o ID do cliente"
//                                 type="text"
//                                 value={idCliente}
//                                 onChange={(e) => setIdCliente(e.target.value)}
//                             />
//                         </div>
//                         <div className="fieldOrdem">
//                             <label className="labelEditOrdem" id="idProduto">ID do Produto:</label>
//                             <input
//                                 className="inputOrdem"
//                                 placeholder="digite o ID do produto"
//                                 type="text"
//                                 value={idProduto}
//                                 onChange={(e) => setIdProduto(e.target.value)}
//                             />
//                         </div>
//                         <div className="fieldOrdem">
//                             <label className="labelEditOrdem" id="idEmpresa">ID da Empresa Parceira:</label>
//                             <input
//                                 className="inputOrdem"
//                                 placeholder="digite o ID da empresa parceira"
//                                 type="text"
//                                 value={idEmpresaParceira}
//                                 onChange={(e) => setIdEmpresaParceira(e.target.value)}
//                             />
//                         </div>
//                     </form>
//                 </div>
//             </main>

//             {/* Botão de confirmação para o post do MapaOrdem e botão para retornar a lista de mapaOrdemes */}
//             <footer id="confirmButtonOrdem">
//                 <button className="buttonReturnAction" type="submit" alt="Botão de retornar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
//                 <button className="buttonGreenAction" type="submit" alt="Botão de confirmar" onClick={handleSubmit}><h3>Confirmar Cadastro</h3><h3 className="gocheck"><GoCheck /></h3></button>
//             </footer>
//         </>
//     )
// }
// export default EditarOrdem