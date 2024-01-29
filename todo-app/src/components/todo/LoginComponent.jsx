import { useState } from 'react'
import { BrowserRouter, Routes,Route, useNavigate,useParams, Link } from "react-router-dom";
import {AuthContext, useAuth} from './security/AuthContext' 


function LoginComponent(){

    const [username,setUsername] = useState('jevina')

    const [password,setPassword] = useState('')

    const [showSuccess,setSuccess] = useState(false)
    const [showFailure,setFailure] = useState(false)

    const navigate = useNavigate();
    const authContext = useAuth()


    function handleUsernameChange(event) {
        console.log(event);
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        console.log(event);
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (username==='jevina' && password==='dummy') {
            authContext.setAuthenticated(true)
            console.log('success');
            setSuccess(true)
            setFailure(false)
            navigate(`/welcome/${username}`)

        }else{
            authContext.setAuthenticated(true)
            console.log('Failed');
            setSuccess(false)
            setFailure(true)
        }
        console.log(username);
        console.log(password);
    }

    // function SuccessMessageComponent() {

    //     if(showSuccess) {
    //         return <div className="successMessage">Authenticated Successfully</div>
    //     }
        
    //     return null   
    // }
    
    // function ErrorMessageComponent() {
    
    //     if(showFailure) {
    //         return <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
    //     }
        
    //     return null   
    // }

    return(
        
        <div className="Login">
            <h1>Login to the web</h1>
            <div className="LoginForm">
            {showSuccess && <div className="successMessage">Authenticated Successfully</div>}   {/* this will only print if showSuccess is true*/}
            {showFailure && <div className="errorMessage">Authentication Failed. 
                                                Please check your credentials.</div>}
                <div>
                    <label htmlFor="">Username:</label>
                    <input type="text" name="username" 
                    value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" 
                    value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" 
                    onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent