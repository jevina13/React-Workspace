import {useParams, Link } from "react-router-dom";

function callHelloWorldRestApi() {
    console.log("hello world called");
}

function WelcomeComponent(){
    const {username} = useParams()

    console.log(username);
    return(
        <div>        
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage your todos <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
        </div>

    )
}

export default WelcomeComponent