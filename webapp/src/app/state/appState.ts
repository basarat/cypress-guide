import { TodosState } from "./todosState";

class AppState {
  todos = new TodosState()
}

export const appState = new AppState();
