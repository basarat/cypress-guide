# Setup Cypress
> Cypress can easily be integrated into any web application in its own dedicated folder. In this lesson we cover how to add cypress with TypeScript support into an existing application without touching any of the existing code. 

> This provides you with a reproducible pattern that you can carry out in your web applications along with a copy pasteable starting point so you don’t need to repeat these steps again and again.

* We start off with a simple existing react typescript application that shows a checkbox with an on label and an off label

```js
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckboxWithLabel } from './checkboxWithLabel';

ReactDOM.render(
  <CheckboxWithLabel id="onOff" labelOn="on" labelOff="off"/>,
  document.getElementById('root')
);
```

***npm start***
Here is quick look at its behaviour in the dom. The text of the checkbox changes as we change the checked state by clicking on the component.  

> Lets add a real browser test for this behaviour using cypress. 

```bash
mkdir e2e
cd e2e
```
* We will setup cypress into an isolated `e2e` folder. This means our testing is actually completely independent of your existing application code and framework choices. You can follow the same steps for any existing applications you might have.

```bash
npm init -y
npm install cypress webpack @cypress/webpack-preprocessor typescript ts-loader
```
* In this folder initialize a new npm root and install `cypress` and its dependencies for writing tests in TypeScript. 

```
npx cypress open
```
* Next we open the cypress IDE using `cypress open`. This will initilize the cypress folder structure for us.

```js
const wp = require('@cypress/webpack-preprocessor')
module.exports = (on) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: { transpileOnly: true }
          }
        ]
      }
    },
  }
  on('file:preprocessor', wp(options))
}

```
* We configure cypress `plugins/index.js` to use the TypeScript packages we installed to transpile tests on the fly.


```json
{
  "compilerOptions": {
    "strict": true,
    "sourceMap": true,
    "module": "commonjs",
    "target": "es5",
    "lib": [
      "dom",
      "es6"
    ],
    "jsx": "react",
    "experimentalDecorators": true
  },
  "compileOnSave": false
}
```

* Lets add a seperate `tsconfig.json` file for this folder. Keeping E2E tests seperate from our project code prevents global type definition conflicts e.g with `describe` `it` etc. 

```
 "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  },
```
* Optionally we add a few script targets to essentially document how to run these test. 

***Select the e2e folder***
> That's it, we are done with the configuration. Note that at this point this e2e folder is primed to be copy pasted into any TypeScript / React Project you want to add e2e tests for.

***Expand the `/integration` folder***
* Now lets write some tests
* All the cypress tests are located in the `integration` folder and we can safely delete the examples. 
* We create a new file `happy.spec.ts` 
* To start our test simply goes and opens the url. 

```ts
/// <reference types="cypress"/>

describe('happy path', () => {
  it('should work', () => {
    cy.visit('http://localhost:8080')
  })
})
```
We launch the cypress IDE using `npm run cypress:open` and select this new test.

* This launches the runner and the test runs.

***Open dev tools in cypress***
Next we need to trigger a click on the input element. We can get the id quite easily as cypress tests run in a chromium instance allowing you to use the familiar chrome developer tools for application debugging and analysis.


```ts
cy.get('#onOff')
  .should('have.text', 'off')
  .click()
  .should('have.text', 'on')
```
* We get a handle to the input using `cy.get` command.
* Next we need to add an assertion. Cypress provides assertions under the `should` command and we can use the `have.text` chain. 
* Next we trigger a `click`
* Finally we add another assertion to ensure the text updates as expected.

> There is lots more to cypress commands and we have only scratched the surface.

```
npm run cypress:run
```
* On the build server you can execute the tests using `npm run cypress:run`. This runs the tests in a CI friendly manner without prompts and window interactions.

***Select the e2e folder***
Note that at this point you can copy paste this `e2e` folder into any of your existing projects as it is fully primed to integrate nicely into any application stack.

# Post recording cleanup
* Delete e2e folder :) 