import "./TodoApp.css"
import LoginComponent from "./LoginComponent.jsx"
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider, {useAuth} from './security/AuthContext'

import "./FooterComponent.jsx"
import { useState } from 'react'
import { BrowserRouter, Routes,Route, Navigate,useParams, Link } from "react-router-dom";

//used to show the todo page only if user authenticated
function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if (authContext.isAuthenticated)
        return children
    return <Navigate to="/" />
}
    
    

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>


                    <Route path='/welcome/:username' element={
                    <AuthenticatedRoute>
                        <WelcomeComponent/>
                    </AuthenticatedRoute>
                    }></Route>   


                    
                    <Route path='/todos' element={
                    <AuthenticatedRoute>
                        < ListTodosComponent />
                    </AuthenticatedRoute> } />

                    <Route path='/logout' element={
                    <AuthenticatedRoute>
                        <LogoutComponent />
                    </AuthenticatedRoute> } />                    

                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}