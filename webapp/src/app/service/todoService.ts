import axios from 'axios';
import { TodoItem, API } from '../../common/types';

export const apiRoot = 'http://localhost:3000/api';

export const add = (body: API.add.Request) => {
  return axios
    .post<API.add.Response>(apiRoot + API.add.endpoint, body)
    .then(res => res.data);
}

export const getAll = () => {
  return axios.get<{ todos: TodoItem[] }>(apiRoot + '/all')
    .then(res => res.data);
}
