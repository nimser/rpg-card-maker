beforeEach(() => {
  cy.visit(Cypress.env("host"))
})
it("Loads the page", () => {
  cy.getByData("title").should("have.text", "RPG Hero Generator")
})
it("Creates a character then shows a card with its specs", () => {
  // 1. Type name
  cy.getByData("hero-name").type("Zwarg")
  // 2. Select Hero
  cy.getByData("hero-card").last().click()
  // 3. Give bonus points
  cy.setStrengthTo(3)
  cy.setEnduranceTo(4)
  // 4. Hit start and check card is generated
  cy.getByData("submit").click()
})
