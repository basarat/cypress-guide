import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { normalize, setupPage } from "csstips";

normalize();
setupPage('#root');

const Hello: React.SFC<{ compiler: string, framework: string }> = (props) => {
  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
    </div>
  );
}

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
