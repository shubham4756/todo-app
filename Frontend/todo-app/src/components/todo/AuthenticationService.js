import axios from 'axios'
import { API_URL } from '../../Constants.js'

export const USER_SESSION = 'authenticatedUser'
export const TOKEN_SESSION = 'token' 

class AuthenticationService {
    
    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(username,token) {
        sessionStorage.setItem(USER_SESSION, username)
        sessionStorage.setItem(TOKEN_SESSION,this.createJWTToken(token))
    }

    createJWTToken(token) {
        return 'Bearer ' +  token
    }

    logout() {
        sessionStorage.removeItem(USER_SESSION)
        sessionStorage.removeItem(TOKEN_SESSION)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_SESSION)
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_SESSION)
        if(user===null) return ''
        return user
    }
}

export default new AuthenticationService()