import {useParams, Link } from "react-router-dom";
import { useState } from 'react'
import {AuthContext, useAuth} from './security/AuthContext' 

// import axios from 'axios'
import { retrieveHelloWorldBean, retrieveHelloWorldPath } from './api/HelloWorldApiService'

function WelcomeComponent(){
    const {username} = useParams()

    const [message, setMessage] = useState(null);

    const authContext = useAuth()

    function callHelloWorldRestApi() {
        console.log("hello world called");
        
        //axios
        // axios.get('http://localhost:8080/hello-world')
        //     .then(
        //         (response)=>successfulResponse(response)
        //     )
        //     .catch((error)=>errorResponse(error))
        //     .finally(() => console.log('cleanup') )

        // retrieveHelloWorldBean()
        //     .then((response)=>successfulResponse(response))
        //     .catch((error)=>errorResponse(error))
        //     .finally(() => console.log('cleanup') )

        retrieveHelloWorldPath('jevina', authContext.token)
            .then((response)=>successfulResponse(response))
            .catch((error)=>errorResponse(error))
            .finally(() => console.log('cleanup') )
    }
    
    function successfulResponse(response) {
        console.log(response);
        setMessage(response.data.message)
    }
    
    function errorResponse(error) {
        console.log(error);
    }

    console.log(username);
    return(
        <div>        
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage your todos <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>

    )
}

export default WelcomeComponent