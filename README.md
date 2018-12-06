# Maintainable web application testing with cypress
> Testing how it should be

Docs / Code to an accompanying video course on cypress web application testing.

## Setup 
Setup the `webapp`: 
* cd webapp
* `npm install`
* `npm start`

For any lesson:
* cd `01` (e.g)
* `npm install`
* `npm start`

## Course 
* https://egghead.io/courses/maintainable-web-application-testing-with-cypress

## Lessons 
* Set up Cypress and TypeScript - Cypress can easily be integrated into any web application in its own dedicated folder. In this lesson we cover how to add cypress with TypeScript support into an existing application without touching any of the existing code. This provides you with a reproducible pattern that you can carry out in your web applications along with a copy pasteable starting point so you don’t need to repeat these steps again and again.

* Command - Execution Separation in Cypress - Cypress works on top of commands. In this lesson we look at command / run separation along with best practices for chaining cypress commands. Cypress commands greatly improve your debugging experience with automatic logs and dom snapshots.

* Implicit Assertions and Automatic Retries in Cypress - We also cover implicit assertions and automatic retries which further decrease the noise in your test code and simultaneously increase test stability.

* Assert Behaviour with Cypress should Command - The should command is your key way to add assertions to cypress tests. It can be used to carry out chai / chai jquery assertions using chainers. In this lesson we take a look at this `.should` command.

* Reuse Application Config in a Cypress Test - You can use any of your browser application code in cypress tests. This is because cypress tests run the same way your browser code runs. In this lesson we cover how to create reusable config modules that remove the brittle coupling between conventional E2E tests and application code. 

* Unit Test Application Code with Cypress - Cypress can also be used for unit testing. In this lesson we demonstrate testing a piece of utility application logic in isolation (without navigating to a url) in a cypress test.

* Create and Interact with Reusable Page Objects in Cypress - A common testing convention is creating objects that provide a convenient handle for all the interactions that various tests need to do with a page. In this lesson we create a page object for cypress and then interact with it in tests. 

* Execute Multiple Cypress Commands in a Loop - In this lesson we look at cypress `each` command which can be used to carry out additional cypress commands in a loop.
