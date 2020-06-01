import axios, { AxiosResponse } from 'axios';
import { ITodo, TTodoList } from './types';

axios.defaults.baseURL = "http://localhost:5000/api/";//process.env.REACT_APP_API_URL;

const responseBody = (response: AxiosResponse) => {
    console.log("Response data: " + JSON.stringify(response.data)); 
    return response.data;
};

const requests = {
    get: (url: string) =>
      axios
        .get(url)
        .then(responseBody),
    post: (url: string, body: {}) =>
      axios
        .post(url, body)
        .then(responseBody),
    put: (url: string, body: {}) =>
      axios
        .put(url, body)
        .then(responseBody),
    del: (url: string) =>
      axios
        .delete(url)
        .then(responseBody),
    postForm: (url: string, file: Blob) => {
      let formData = new FormData();
      formData.append('File', file);
      return axios
        .post(url, formData, {
          headers: { 'Content-type': 'multipart/form-data' }
        })
        .then(responseBody);
    }
  };

const Todos = {
    list: (params: URLSearchParams): Promise<TTodoList> => axios.get('/Todos', {params: params}).then(responseBody),
    details: (id: string) => requests.get(`/Todos/${id}`),
    create: (todo: ITodo) => requests.post('/Todos', todo),
    update: (todo: ITodo) => requests.put(`/Todos/${todo.id}`, todo),
    delete: (id: string) => requests.del(`/Todos/${id}`)
  };

  export default Todos;