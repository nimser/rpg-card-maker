import App from "../../src/App"

beforeEach(() => {
  cy.mount(<App />)
})
describe("Type name", () => {
  it("Types name in text input", () => {
    cy.getByData("hero-name")
      .type("Zwarg")
      .should("have.attr", "value", "Zwarg")
  })
})
describe("Select Hero", () => {
  it("Populates gauges when selecting a hero", () => {
    cy.getByData("hero-card").last().click()
    cy.getByData("gauge").then(($gauge) => {
      expect($gauge[0]).to.have.attr("data-gauge-value", "2")
      expect($gauge[1]).to.have.attr("data-gauge-value", "3")
      expect($gauge[2]).to.have.attr("data-gauge-value", "5")
    })
  })
  it("Repulates gauges when changing hero", () => {
    cy.getByData("hero-card").last().click()
    cy.getByData("gauge").then(($gauge) => {
      expect($gauge[0]).to.have.attr("data-gauge-value", "2")
      expect($gauge[1]).to.have.attr("data-gauge-value", "3")
      expect($gauge[2]).to.have.attr("data-gauge-value", "5")
    })
    cy.getByData("hero-card").first().click()
    cy.getByData("gauge").then(($gauge) => {
      expect($gauge[0]).to.have.attr("data-gauge-value", "4")
      expect($gauge[1]).to.have.attr("data-gauge-value", "3")
      expect($gauge[2]).to.have.attr("data-gauge-value", "3")
    })
  })
})
describe("Give bonus points", () => {
  // Initially loads with a count of 2
  // Use bonus point when an empty GaugeUnit is clicked
  // Does not use bonus point when a full GaugeUnit is clicked
  // Does not use bonus point when used up
})
describe("Hit start", () => {
  // Calls event handler when clicked
})
