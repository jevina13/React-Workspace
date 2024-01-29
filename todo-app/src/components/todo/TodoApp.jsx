import "./TodoApp.css"
import LoginComponent from "./LoginComponent.jsx"
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider from './security/AuthContext'


import "./FooterComponent.jsx"
import { useState } from 'react'
import { BrowserRouter, Routes,Route, useNavigate,useParams, Link } from "react-router-dom";

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>         
                    <Route path='/todos' element={<ListTodosComponent /> } />
                    <Route path='/logout' element={<LogoutComponent /> } />                    

                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}