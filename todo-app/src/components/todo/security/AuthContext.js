import {createContext,useContext,useState} from 'react';
import { executeAuthenticationService } from "../api/HelloWorldApiService";

//Create Context
export const AuthContext = createContext()

//created a hook to access values in authentication context
export const useAuth = () => useContext(AuthContext);

//Share the created context with other components
export default function AuthProvider({children}) {
    
    //Put some state in context
    const [number,setNumber] = useState(10)

    const [isAuthenticated,setAuthenticated] = useState(false)

    const[username, setUsername] = useState(null)

    // function login(username, password){
    //     if (username==='jevina' && password==='dummy') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    function login(username, password){
        //creating a dynamic token tobe passed for authentication and then encoding it
        const baToken = 'Basic ' + window.btoa(username+":"+password)

        executeAuthenticationService(baToken)
        .then(response =>console.log(response))
        .catch(error => console.log(error))

        setAuthenticated(false)

        if (username==='jevina' && password==='dummy') {
            setAuthenticated(true)
            setUsername(username)
            return true
        }else{
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    //setInterval(() => setNumber(number+1), 10000);
    //const valueToBeShared = {number, isAuthenticated,setAuthenticated}
    return(
        <AuthContext.Provider value={{number, isAuthenticated,login,logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}