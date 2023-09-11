/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    setStrengthTo(strengthValue: number): Chainable<JQuery<HTMLElement>>
    setEnduranceTo(enduranceValue: number): Chainable<JQuery<HTMLElement>>
    setCharismTo(charismValue: number): Chainable<JQuery<HTMLElement>>
  }
}
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("setStrengthTo", (value) => {
  cy.getByData("gauge")
    .eq(0)
    .within(() => {
      cy.getByData("gauge-unit")
        .eq(value - 1)
        .click()
    })
})

Cypress.Commands.add("setEnduranceTo", (value) => {
  cy.getByData("gauge")
    .eq(1)
    .within(() => {
      cy.getByData("gauge-unit")
        .eq(value - 1)
        .click()
    })
})

Cypress.Commands.add("setCharismTo", (value) => {
  cy.getByData("gauge")
    .eq(1)
    .within(() => {
      cy.getByData("gauge-unit")
        .eq(value - 1)
        .click()
    })
})

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
