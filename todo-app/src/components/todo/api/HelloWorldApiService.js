import { apiClient } from "./ApiClient";

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean') 
// }
//both return same


export const retrieveHelloWorldBean
    =()=> apiClient.get('/hello-world-bean')

//Response to preflight req doesn't pass access control check => Authorization header
export const retrieveHelloWorldPath
    =(username, token)=> apiClient.get(`/hello-world/path-variable/${username}`,
     // {
    //     headers: {
    //         Authorization: token
    //     }
    // }        we can comment this because we have added interceptors in authContext
    )

export const executeAuthenticationService
    =(token)=> apiClient.get(`/basicauth`,{         //calling basicauth with the token passed
        headers: {
            Authorization: token
        }
    })