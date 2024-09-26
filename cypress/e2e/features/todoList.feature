Feature: Todo list

  Scenario: Add a new todo item
    Given I open the Cypress todo homepage
    When I add a new todo item
    Then I should see the todo item added to the list

