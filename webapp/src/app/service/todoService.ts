import axios from 'axios';
import { TodoItem } from '../../common/types';

export const apiEndpoint = 'http://localhost:3000/api';

export const addItem = (message: string) => {
  return axios
    .post<{ id: string }>(apiEndpoint + '/add', { message })
    .then(res => res.data);
}

export const getAllItems = () => {
  return axios.get<{ items: TodoItem[] }>(apiEndpoint + '/all')
    .then(res => res.data);
}
