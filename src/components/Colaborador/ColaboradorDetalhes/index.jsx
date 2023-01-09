// import React, { useState, useEffect } from "react";
// import { GoListUnordered } from 'react-icons/go';
// import "./styles.css";

// // Import dos CRUD
// import { getColaborador } from "../../../services/crudClient";

// const CardColaborador = (props) => {
//     const [item, setItem] = useState([])
    
//     useEffect(() => {
//         (async () => {
//             const data = await getColaborador()
//             setItem(data)
//             console.log("o que é:", data)
//         })()
//     }, [])
    
//     return (
//         <>
//             <header id="headerCardColaborador">
//                 <label className="headerCardColaborador">Função:</label>
//                 <label className="headerCardColaboradorNome">| Nome:</label>
//                 <label className="headerCardColaboradorStatus">| ID:</label>
//             </header>

//             <div id="mainCardColaborador">
//                 {item?.map((item, index) => (
//                     <div id="CardColaborador" key={index}>
//                         <div className="CardColaboradorTexto">
//                             <h2 className="mainCardColaborador">{item.funcaoFuncionario}</h2>
//                             <h2 className="mainCardColaboradorNome">{item.nomeFuncionario}</h2>
//                             <h2 className="mainCardColaboradorStatus">{item.idFuncionario}</h2>
//                             {/* <h2 className="mainCardColaboradorStatus">{item.status}</h2> */}
//                             <div id="actionView">
//                                 <button className="buttonOrangeActionView" alt="Botão de visualizar colaborador" onClick={props.event} state={{ data: item }}>+<GoListUnordered/></button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }
// export default CardColaborador







// Tentativa de passar o id do card selecionado para exibição 
// do detalhes(informações completas do colaborador)

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./styles.css";


// //Import dos icones 
// // import { GoCheck } from 'react-icons/go';
// import { BsArrowReturnLeft } from 'react-icons/bs';

// //Import dos CRUDS 
// // import { getColaboradorById } from "../../../services/crudClient";
// import { api } from "../../../services/api";

// const ColaboradorDetalhes = (props, exibir) => {
//     const { state } = useLocation()
//     const [item, setItem] = useState(exibir)

//     // Dados pessoais
//     const [nomeColaborador, setNomeColaborador] = useState(item?.nomeFuncionario)
//     const [cpf, setCpf] = useState(item?.cpfFuncionario)
//     const [rg, setRg] = useState(item?.rgFuncionario)
//     const [email, setEmail] = useState(item?.emailFuncionario)
//     const [password, setPassword] = useState(item?.passwordFuncionario)
//     const [funcao, setFuncao] = useState(item?.funcaoFuncionario)

//     // Endereço
//     const [cep, setCep] = useState(item?.cep)
//     const [estado, setEstado] = useState(item?.estado)
//     const [cidade, setCidade] = useState(item?.cidade)
//     const [rua, setRua] = useState(item?.logradouro)
//     const [numero, setNumero] = useState(item?.numero)
//     const [complemento, setComplemento] = useState(item?.complemento)
//     const [bairro, setBairro] = useState(item?.bairro)

//     // ******************* >>>
//     // useEffect(() => {
//     //     (async () => {
//     //         const data = await getColaboradorById()
//     //         setItem(data)
//     //         console.log("colab por id:" + data)
//     //     })()
//     // }, [])
//     // console.log("eu sou o data de fora:", data)
//     // *********************** <<<

//     // apagar ******************* >>>>>>>
//     const getItem = async () => {
//         // const { data } = await api.get(`/funcionario/${item?.idFuncionario}`)
//         // console.log("colab detalhes: ", data)
//         // setItem(data)
//     }

//     useEffect(() => {
//         // getItem()
//         console.log("detalhes:", item)
        
//     }, [])
//     // ****************** <<<<<<<

//     // Função CRUD da api para post do colaborador
//     const atualizarItemns = async (e) => {
//         try {
//             const itemAtualizado = {
//                 nomeFuncionario: nomeColaborador,
//                 emailFuncionario: email,
//                 senhaFuncionario: password,
//                 funcaoFuncionario: funcao,
//                 cpfFuncionario: cpf,
//                 rgFuncionario: rg,

//                 endereco: {
//                     cep: cep,
//                     estado: estado,
//                     cidade: cidade,
//                     bairro: bairro,
//                     logradouro: rua,
//                     numero: numero,
//                     complemento: complemento
//                 }
//             }
//             // console.log(itemAtualizado)
//             await api.put(`/funcionario/dto/${item.idFuncionario}`, itemAtualizado)
//             getItem();
//             alert("Atualizado  com sucesso")
//         } catch {
//             alert("erro ao atualizar confira os campos")
//         }
//     }
//     return (
//         <>
//             <header id="headerCardColaborador">
//                 <label className="headerCardColaborador">Função:</label>
//                 <label className="headerCardColaboradorNome">| Nome:</label>
//                 <label className="headerCardColaboradorStatus">| Status:</label>
//             </header>

//             <div id="mainCardColaboradorDetalhes">
//                 <div id="CardColaboradorDetalhes">
//                     <div className="CardColaboradorTextoDetalhes">
//                         <input className="mainCardColaboradorNomeDetalhes" onChange={e => setNomeColaborador(e.target.value)} value={exibir.nomeColaborador} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setCpf(e.target.value)} value={cpf} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setRg(e.target.value)} value={rg} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setEmail(e.target.value)} value={email} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setPassword(e.target.value)} value={password} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setFuncao(e.target.value)} value={funcao} required />
//                     </div>
//                     {/* <div>
//                         <input className="mainCardColaboradorNomeDetalhes" onChange={e => setCep(e.target.value)} value={cep} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setEstado(e.target.value)} value={estado} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setCidade(e.target.value)} value={cidade} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setRua(e.target.value)} value={rua} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setNumero(e.target.value)} value={numero} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setComplemento(e.target.value)} value={complemento} required />
//                         <input className="mainCardColaboradorDetalhes" onChange={e => setBairro(e.target.value)} value={bairro} required />
//                     </div> */}
//                 </div>
//             </div>

//             {/* Botão de confirmação para o put do Colaborador */}
//             <footer id="buttonConfirm">
//                 <div className="confirm">
//                     <button className="buttonReturnAction" type="submit" alt="Botão de confirmar" onClick={props.return}><h3>Voltar</h3><h3 className="gocheck"><BsArrowReturnLeft /></h3></button>
//                     <button className="buttonGreenAction" alt="Botão de atualizar" onClick={atualizarItemns}><h3>Atualizar</h3></button>
//                 </div>
//             </footer>
//         </>
//     )
// }
// export default ColaboradorDetalhes