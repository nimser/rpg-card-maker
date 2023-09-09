beforeEach(() => {
  cy.visit(Cypress.env("host"))
})
it("Loads the page", () => {
  cy.getByData("title").should("have.text", "RPG Hero Generator")
})
xit("Creates a character then shows a card with its specs", () => {
  // 1. Type name
  // 2. Select Hero
  // 3. Give bonus points
  // 4. Hit start and check card is generated
})
