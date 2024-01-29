import {useParams, Link } from "react-router-dom";

function WelcomeComponent(){
    const {username} = useParams()

    console.log(username);
    return(
        <div>        
            <h1>Welcome {username}</h1>
            <div className="Welcome">
                Manage your todos <Link to="/todos">Go here</Link>
            </div>
        </div>

    )
}

export default WelcomeComponent