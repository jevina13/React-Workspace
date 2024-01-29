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

    //setInterval(() => setNumber(number+1), 10000);
    //const valueToBeShared = {number, isAuthenticated,setAuthenticated}
    return(
        <AuthContext.Provider value={{number, isAuthenticated,setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}