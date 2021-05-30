import axios from 'axios'
import { API_URL } from '../../Constants.js'

class TodoDataService {
    
    retrieveAllTodos(name) {
        return axios.get(`${API_URL}/users/${name}/todos`
        , { headers : { authorization: sessionStorage.getItem('token') } }
        );
    }

    retrieveTodo(name, id) {
        return axios.get(`${API_URL}/users/${name}/todos/${id}`
        , { headers : { authorization: sessionStorage.getItem('token') } }
        );
    }

    deleteTodo(name, id) {
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`
        , { headers : { authorization: sessionStorage.getItem('token') } }
        );
    }

    updateTodo(name, id, todo) {
        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo
        , { headers : { authorization: sessionStorage.getItem('token') } }
        );
    }

    createTodo(name, todo) {
        return axios.post(`${API_URL}/users/${name}/todos/`, todo
        , { headers : { authorization: sessionStorage.getItem('token') } });
    }

}

export default new TodoDataService()