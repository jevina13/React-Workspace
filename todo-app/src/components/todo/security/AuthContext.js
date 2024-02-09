import {createContext,useContext,useState} from 'react';
import { executeAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

//Create Context
export const AuthContext = createContext()

//created a hook to access values in authentication context
export const useAuth = () => useContext(AuthContext);

//Share the created context with other components
export default function AuthProvider({children}) {
    
    //Put some state in context
    const [number,setNumber] = useState(null)   //changed (10) to (nul in both)
    const [token,setToken] = useState(null)

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

    async function login(username, password){
        //creating a dynamic token tobe passed for authentication and then encoding it
        const baToken = 'Basic ' + window.btoa(username+":"+password)
        try{

            const response = await executeAuthenticationService(baToken)        //await - waits for code to get successful and stores in resp
       

            if (response.status==200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)

                //the interceptor makes sure we pass the authorization token to any api call
                apiClient.interceptors.request.use(
                    (config) =>{
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = baToken
                        return config
                    }
                )

                return true
            }else{
                logout()
                return false
            }
        }
        catch(error){
            setAuthenticated(false)
                setUsername(null)
                return false
        }
        
    }

    function logout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    //setInterval(() => setNumber(number+1), 10000);
    //const valueToBeShared = {number, isAuthenticated,setAuthenticated}
    return(
        <AuthContext.Provider value={{number, isAuthenticated,login,logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}