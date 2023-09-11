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
    cy.getByData("hero-card").first().click()
    cy.getByData("gauge").then(($gauge) => {
      expect($gauge[0]).to.have.attr("data-gauge-value", "4")
      expect($gauge[1]).to.have.attr("data-gauge-value", "3")
      expect($gauge[2]).to.have.attr("data-gauge-value", "3")
    })
  })
})
describe("Give bonus points", () => {
  beforeEach(() => {
    cy.getByData("hero-card").last().click()
  })
  it("Initially loads with a count of 2", () => {
    cy.getByData("bonus-counter").should("have.text", 2)
  })
  it("Use bonus point when an empty GaugeUnit is clicked", () => {
    cy.getByData("bonus-counter").should("have.text", 2)
    cy.setStrengthTo(4)
    cy.getByData("gauge").eq(0).should("have.attr", "data-gauge-value", "4")
    cy.getByData("bonus-counter").should("have.text", 0)
  })
  it("Does not use bonus point when a full GaugeUnit is clicked", () => {
    cy.getByData("bonus-counter").should("have.text", 2)
    cy.getByData("gauge").first().find("[data-test=gauge-unit]").first().click()
    cy.getByData("gauge").first().should("have.attr", "data-gauge-value", "2")
    cy.getByData("bonus-counter").should("have.text", 2)
  })
  it("Does not use bonus point when used up", () => {
    cy.getByData("bonus-counter").should("have.text", 2)
    cy.setStrengthTo(3)
    cy.setEnduranceTo(4)
    // Attempt to bump strength again from 3 to 4 (will not proceed, no bonus left)
    cy.setStrengthTo(4)
    // Check gauge values
    cy.getByData("gauge").eq(0).should("have.attr", "data-gauge-value", "3")
    cy.getByData("gauge").eq(1).should("have.attr", "data-gauge-value", "4")
  })
  it("Resets bonus points when changing character", () => {
    cy.setStrengthTo(4)
    cy.getByData("bonus-counter").should("have.text", 0)
    cy.getByData("hero-card").first().click()
    cy.getByData("bonus-counter").should("have.text", 2)
  })
})
