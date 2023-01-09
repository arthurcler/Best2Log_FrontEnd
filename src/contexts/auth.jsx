import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();

// Props children passa o conteúdo que o componente tem em sua origem para onde é chamado.
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [access, setAccess] = useState(null)
    const [token, setToken] = useState(null)

    useEffect(() => {

        // Mesmo com a atualização da pagina, permanece logado
        const token = localStorage.getItem('token')

        if (token) {

            const funcao = localStorage.getItem('funcao')
            setAccess(funcao)

            // Mantém o token após o reload
            api.defaults.headers.Authorization = `Bearer ${token}`
            setToken(token)
        }

        // Determina que as outras funções podem ser carregadas após a checagem de existência do funcionarioLogado
        setLoading(false)
    }, [])

    const login = async (email, senha) => {

        // link com a API, retornando o email e senha no momento do login
        const response = await createSession(email, senha)
        console.log("login", response.data)

        // Token da api
        const token = response.data["jwt-token"]

        // Função - TipoFuncionario (ENUM = função)
        const funcao = response.data.funcao
        setAccess(funcao)

        // Armazena a informação do token do usuario logado
        localStorage.setItem("token", token)

        // Armazena a informação da funcao do usuario logado
        localStorage.setItem("funcao", funcao)

        // Traz o token após cada requisição
        api.defaults.headers.Authorization = `Bearer ${token}`

        // Redirecionamento
        switch (funcao) {
            case "ADMINISTRADOR":
                navigate("/administrador")
                break;

            case 'CONFERENTE':
                navigate("/conferente")
                break;

            case 'ESTOQUISTA':
                navigate("/estoquista")
                break;

            case 'MOTORISTA':
                navigate("/motorista")
                break;
            
            default:
                navigate("/")
                break;
        }
    }

    const logout = () => {

        // Remove o usuario logado do localStorage
        localStorage.removeItem("funcao")

        // Remove o Token do localStorage
        localStorage.removeItem("token")

        // Define a autorização de acesso como nula
        api.defaults.headers.Authorization = null

        navigate("/")
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!token, loading, login, logout, access }}>
            {children}
        </AuthContext.Provider>
    )
}