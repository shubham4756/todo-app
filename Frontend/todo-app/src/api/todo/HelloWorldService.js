import axios from 'axios'
import { API_URL } from '../../Constants.js'

class HelloWorldService {

    executeHelloWorldPathVariableService(name) {
        return axios.get(`${API_URL}/hello-world/path-variable/${name}`
        , { headers : { authorization: sessionStorage.getItem('token') } }
        );        
    }
    
}

export default new HelloWorldService()