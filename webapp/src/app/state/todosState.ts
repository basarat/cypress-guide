import { observable, action } from 'mobx';
import { FieldState } from 'formstate';
import { TodoItem } from '../../common/types';
import { addItem } from '../service/todoService';

export class TodosState {
  @observable
  items: TodoItem[] = [];

  @observable
  current = new FieldState('');

  @action
  async addCurrentItem() {
    if (this.current.value.trim() === '') return;
    addItem(this.current.$);
  }
}
