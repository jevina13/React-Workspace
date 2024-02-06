import axios from 'axios'

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean') 
// }
//both return same

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
);

export const retrieveHelloWorldBean
    =()=> apiClient.get('/hello-world-bean')

//Response to preflight req doesn't pass access control check => Authorization header
export const retrieveHelloWorldPath
    =(username)=> apiClient.get(`/hello-world/path-variable/${username}`,{
        headers: {
            //Authorization: 'Basic amV2aW5hOmR1bW15'
        }
    })

export const executeAuthenticationService
    =(token)=> apiClient.get(`/basicauth`,{         //calling basicauth with the token passed
        headers: {
            Authorization: token
        }
    })