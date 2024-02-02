import {createContext,useContext,useState} from 'react';

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

    function login(username, password){
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