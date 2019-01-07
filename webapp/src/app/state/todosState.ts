import { observable, action, computed } from 'mobx';
import { FieldState } from 'formstate';
import { TodoItem } from '../../common/types';
import { getAllItems, addItem } from '../service/todoService';

export class TodosState {
  @observable
  items: TodoItem[] = [];

  @observable
  current = new FieldState('');

  @computed
  get hasTodos() {
    return this.items.length !== 0;
  }

  @action
  async addCurrentItem() {
    if (this.current.value.trim() === '') return;
    const { id } = await addItem(this.current.value);
    this.items.push({
      id,
      completed: false,
      message: this.current.value
    });
    this.current.onChange('');
  }

  @action
  async loadItems() {
    const { items } = await getAllItems();
    this.items = items;
  }
}
