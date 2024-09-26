import {Given} from "@badeball/cypress-cucumber-preprocessor";

Given('I open the Cypress todo homepage', () => {
    cy.visit('https://example.cypress.io/todo')
})

Given('I add a new todo item', () => {
    cy.get('[data-test="new-todo"]').type('Complete Cypress tutorial{enter}')
})

Given('I should see the todo item added to the list', () => {
    cy.get('.todo-list li').contains('Complete Cypress tutorial').should('be.visible')
})



