import { apiClient } from "./ApiClient";

export const executeAuthenticationService
    =(token)=> apiClient.get(`/basicauth`,
    {         //calling basicauth with the token passed
        headers: {
            Authorization: token
        }
    }
)