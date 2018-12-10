import { observable, action } from 'mobx';
import { FieldState } from 'formstate';
import { TodoItem } from '../../common/types';
import { addItem, getAllItems } from '../service/todoService';

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

  @action
  async loadItems() {
    const { items } = await getAllItems();
    this.items = items;
  }
}
