import axios from 'axios';
import { TodoItem } from '../../common/types';

export const serviceEndpoint = 'http://localhost:3000';

export const addItem = (message: string) => {
  return axios
    .post<{ id: string }>(serviceEndpoint + '/add', { message })
    .then(res => res.data);
}

export const getAllItems = () => {
  return axios.get<{ items: TodoItem[] }>(serviceEndpoint + '/all')
    .then(res => res.data);
}
