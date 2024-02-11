import { apiClient } from "./ApiClient";

export const executeAuthenticationService
    =(token)=> apiClient.get(`/basicauth`,
    {         //calling basicauth with the token passed
        headers: {
            Authorization: token
        }
    }
)

//passes username and password to generate jwt token
export const executeJwtAuthenticationService
    =(username, password)=> apiClient.post(`/authenticate`,{username,password})