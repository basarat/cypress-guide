import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { loadTodoMVCCSS } from './todomvc/css';
import { App } from './components/components';

loadTodoMVCCSS();

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
