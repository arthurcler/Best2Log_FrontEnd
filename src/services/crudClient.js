import { api } from './api';

// CRUD - Colaborador

// CRUD - GET -> retornando os colaboradores
const token = localStorage.getItem("token")
export const getColaborador = async () => {
    try {
        const { data } = await api.get("/funcionario/dto", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// Filtro Ativo
export const getColaboradorFA = async () => {
    try {
        const { data } = await api.get("/funcionario/dto/filtro/ativo", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// Filtro Inativo
export const getColaboradorFI = async () => {
    try {
        const { data } = await api.get("/funcionario/dto/filtro/inativo", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// CRUD - GET -> retornando os colaboradores pelo id
export const getColaboradorById = async () => {
    try {
        const { data } = await api.get("/funcionario", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// CRUD - POST -> cadastrando o colaborador
export const postColaborador = async (postColaborador) => {
    try {
        const { data } = await api.post("/auth/registro", postColaborador)
        return data 
    } catch(e) {
        console.log(e)
    }
}

// CRUD - PUT -> alterando o cadastro do colaborador
// export const putColaborador = async (exibir) => {
//     try {
//         const { data } = await api.put(`/funcionario/dto/${exibir.idFuncionario}`)
//         console.log("to no put:", exibir)
//         return data
//     } catch(e) {
//         console.log(e)
//     }
// }

/* ******************************************************** */
// CRUD - Empresas Parceiras

// CRUD - GET -> retornando as empresas parceiras
export const getEmpresa = async () => {
    try {
        const { data } = await api.get("/empresa_parceira/dto", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// CRUD - POST -> cadastrando da Empresa
export const postEmpresaParceira = async (postEmpresaParceira) => {
    try {
        const { data } = await api.post("/empresa_parceira", postEmpresaParceira)
        return data 
    } catch(e) {
        console.log(e)
    }
}

/* ******************************************************** */
// CRUD - Centro de Distribuição

// CRUD - GET -> retornando as centro de distribuição
export const getCentroDistribuicao = async () => {
    try {
        const { data } = await api.get("/cd", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// CRUD - POST -> cadastrando da Centro de Distribuição
export const postCentro = async (postCentro) => {
    try {
        const { data } = await api.post("/cd", postCentro)
        return data 
    } catch(e) {
        console.log(e)
    }
}

/* ******************************************************** */
// CRUD - Mapa de Carga

// CRUD - GET -> retornando o mapa de carga
export const getMapaCarga= async () => {
    try {
        const { data } = await api.get("/mapa", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// CRUD - POST -> cadastrando da Centro de Distribuição
export const postMapaCarga = async (postMapaCarga) => {
    try {
        const { data } = await api.post("/cd", postMapaCarga)
        return data 
    } catch(e) {
        console.log(e)
    }
}

/* ******************************************************** */
// CRUD - Ordem de Entrega

// CRUD - GET -> retornando a ordem de entrega
export const getOrdem = async () => {
    try {
        const { data } = await api.get("/entrega_produto/dto", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// CRUD - POST -> cadastrando a ordem de entrega
export const postOrdem = async () => {
    try {
        const { data } = await api.post("/entrega_produto/dto", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}


// CRUD - Produto

// CRUD - GET -> retornando os produtos
export const getProduto = async () => { //--produtos --> alterar caminho
    try {
        const { data } = await api.get("/produto/dto", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}

// CRUD - POST -> cadastrando o produto
export const postProduto = async (postColaborador) => {
    try {
        const { data } = await api.post("/produto/dto", postColaborador)
        console.log("estou no registro")
        return data 
    } catch(e) {
        console.log(e)
    }
}


// CRUD - Cliente

// CRUD - GET -> retornando os cliente
export const getCliente = async () => {
    try {
        const { data } = await api.get("/cliente/dto", { headers: { 'Authorization': `Bearer ${token}` } })
        return data 
    } catch(e) {
        console.log(e)
    }
}


// CRUD - POST -> cadastrando a ordem de entrega
// export const postOrdemEntrega = async (postOrdemEntrega) => {
//     try {
//         const { data } = await api.post("/ordem" + postOrdemEntrega)
//         console.log("estou no postOrdemEntrega", data)
//         return data 
//     } catch(e) {
//         console.log(e, " Post Ordem de Entrega NÃO DA ERRO NAO PUFAVO")
//     }

// export const deleteOrdemEntrega = async (id) => {
//     try {
//         const deleteOrdemEntrega = await api.delete("/ordemEntrega/" + id)
//         return deleteOrdemEntrega
//     } catch(e) {
//         console.log(e)
//     }
// }

// export const updateOrdemEntrega = async (OrdemEntrega) => {
//     try {
//         const updateOrdemEntrega = await api.put("/ordemEntrega/" + OrdemEntrega.id)
//         return updateOrdemEntrega
//     } catch(e) {
//         console.log(e)
//     }
//}