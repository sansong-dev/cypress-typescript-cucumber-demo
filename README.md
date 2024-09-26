# Cypress TypeScript Cucumber Demo Project

This project contains automated tests using [Cypress](https://www.cypress.io),  [TypeScript](https://www.typescriptlang.org/), and [cypress-cucumber-preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor)
## Pre-requisites

[node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/) should be installed on your machine. 
This project uses node version 18 - higher versions may not work with this project's version of cypress and/or cucumber preprocessor. 

## Installation
Use npm install to install the necessary dependencies.

```
npm install
```

## Running Tests 
To run tests in **development** mode, use the following command:
```
npm run cypress:open
```
This opens the Cypress test runner, allowing you to interactively run and debug your tests.
Videos and screenshots will be generated under the reports folder


To run tests in **headless** mode use:

```
npm run cypress:run:headless
```
This command runs all the tests in the suite without a graphical interface.


