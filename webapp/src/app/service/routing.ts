import { observable } from 'mobx';

export const routes = {
  all: '/',
  active: '/active',
  completed: '/completed'
}

export type Routes =
  |'all'
  | 'active'
  | 'completed';

export class RouterState {
  @observable
  route: Routes = 'all';
}

export const routerState = new RouterState();

import { Router } from 'takeme';
export { navigate, link } from 'takeme';

new Router([
  {
    $: routes.active,
    enter: () => routerState.route = 'active'
  },
  {
    $: routes.completed,
    enter: () => routerState.route = 'completed'
  },
  {
    $: routes.all,
    enter: () => routerState.route = 'all',
  }
]).init();
