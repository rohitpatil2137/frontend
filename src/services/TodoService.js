import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api/todoitems'; // Fallback for development

class TodoService {
    getTodos() {
        return axios.get(API_URL);
    }

    getTodo(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createTodo(todo) {
        return axios.post(API_URL, todo);
    }

    updateTodo(id, todo) {
        return axios.put(`${API_URL}/${id}`, todo);
    }

    deleteTodo(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new TodoService();
