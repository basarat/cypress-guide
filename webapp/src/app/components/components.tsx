import * as React from 'react';
import { FieldState } from 'formstate';
import { classNames } from '../todomvc/css';
import { appState } from '../state/appState';

export const App: React.SFC<{}> = (props) => {
  return (
    <section className={classNames.app}>
      <Header fieldState={appState.todos.current} />
    </section>
  );
}

export const Header: React.SFC<{
  fieldState: FieldState<string>
}> = ({ fieldState }) => {
  return (<header className={classNames.header}>
    <h1>todos</h1>
    <input
      className={classNames.newTodo}
      autoFocus={true}
      placeholder="What needs to be done?"
      value={fieldState.value}
      onChange={(e) => fieldState.onChange(e.target.value)}
    />
  </header>);
}
