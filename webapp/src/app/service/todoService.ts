import axios from 'axios';
import { TodoItem, API } from '../../common/types';

export const apiRoot = 'http://localhost:3000/api';

export const create = (body: API.create.Request) => {
  return axios
    .post<API.create.Response>(apiRoot + API.create.endpoint, body)
    .then(res => res.data);
}

export const getAll = () => {
  return axios.get<API.getAll.Response>(apiRoot + API.getAll.endpoint)
    .then(res => res.data);
}
