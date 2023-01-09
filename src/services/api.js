import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080" //porta disponibilizada por email 28/11
})

// Realizando o acesso a API
export const createSession =  async (email, senha) => {
    // console.log("createSession!")
    return api.post("/auth/login", { email, senha })
}

