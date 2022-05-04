import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Busca from "../pages/busca/Busca";
import Carrinho from "../pages/carrinho/Carrinho";
import EditarDados from "../pages/editar/EditarDados";
import CadastroEndereco from "../pages/endereco/CadastroEndereco";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Perfil from "../pages/perfil/Perfil";
import Resultado from "../pages/resultado/Resultado";
import SignUp from "../pages/signup/SignUp";
import UntitledSection from "../pages/untitled/UntitledSection";
import ErrorPage from "../pages/ErrorPage";


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index path ="/" element={<Home/>}/>
                <Route exact path ="/rappi4/login" element={<Login/>}/>
                <Route exact path ="/rappi4/sign-up" element={<SignUp/>}/>
                <Route exact path ="/rappi4/perfil" element={<Perfil/>}/>
                <Route exact path ="/rappi4/busca" element={<Busca/>}/>
                <Route exact path ="/rappi4/resultado" element={<Resultado/>}/>
                <Route exact path ="/rappi4/carrinho" element={<Carrinho/>}/>
                <Route exact path ="/rappi4/editar-dados" element={<EditarDados/>}/>
                <Route exact path ="/rappi4/cadastro-endereco" element={<CadastroEndereco/>}/>
                <Route exact path ="/rappi4/untitled-section" element={<UntitledSection/>}/>
                <Route exact path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
