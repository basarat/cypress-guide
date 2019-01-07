import { observable, action, computed } from 'mobx';
import { FieldState } from 'formstate';
import { TodoItem } from '../../common/types';
import { getAllItems } from '../service/todoService';

/** TODO: wire todo service */
let mock = 0;

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
    this.items.push({
      id: (mock++).toString(),
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
