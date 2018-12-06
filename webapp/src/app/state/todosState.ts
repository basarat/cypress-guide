import { observable } from 'mobx';

export type TodoItem = {
  id: string,
  completed: boolean,
  message: string,
}

export class TodosState {
  @observable
  items: TodoItem[] = [];
}
