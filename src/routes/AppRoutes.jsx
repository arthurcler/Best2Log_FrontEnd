import React, { useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, AuthContext } from "../contexts/auth";
import Administrador from '../pages/Administrador';
import Conferente from '../pages/Conferente';
import Estoquista from '../pages/Estoquista';
import Motorista from '../pages/Motorista';
import Login from '../pages/Login';

const AppRoutes = () => {

    const Private = ({ children, funcao }) => {
        const { loading, authenticated, access } = useContext(AuthContext)

        if (loading) {
            return <div className="loading">Carregando ...</div>
        }

        if (!authenticated) {
            return <Navigate to="/" />
        }

        if (access == funcao) {
            return children
        }

        return <Navigate to="/" />
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route exact path="/administrador" element={<Private funcao={"ADMINISTRADOR"}><Administrador /></Private>}></Route>
                    <Route exact path="/conferente" element={<Private funcao={"CONFERENTE"}><Conferente /></Private>}></Route>
                    <Route exact path="/estoquista" element={<Private funcao={"ESTOQUISTA"}><Estoquista /></Private>}></Route>
                    <Route exact path="/motorista" element={<Private funcao={"MOTORISTA"}><Motorista /></Private>}></Route>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;
