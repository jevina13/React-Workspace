import "./TodoApp.css";
import { useState } from "react";
import { BrowserRouter, Routes,Route, useNavigate } from "react-router-dom";

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent/>}></Route>
                <Route path='/login' element={<LoginComponent/>}></Route>
                <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                <Route path='*' element={<ErrorComponent/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){

    const [username,setUsername] = useState('jevina')

    const [password,setPassword] = useState('')

    const [showSuccess,setSuccess] = useState(false)
    const [showFailure,setFailure] = useState(false)

    const navigate = useNavigate();

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
            console.log('success');
            setSuccess(true)
            setFailure(false)
            navigate('/welcome')
        }else{
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
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}


function WelcomeComponent(){
    return(
        <div>        
            <h1>Welcome Jevina</h1>
            <div className="Welcome">
                Welcome Component
            </div>
        </div>

    )
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>Apologies for the 404. 
                Reach out to our team at 3d4-566-1k8
            </div>
        </div> 
    )
}