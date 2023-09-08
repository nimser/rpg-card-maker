import GaugeUnit from "../../src/components/GaugeUnit"

describe("GaugeUnit.cy.tsx", () => {
  it("mounts", () => {
    cy.mount(<GaugeUnit />)
  })
  it("defaults to unset state", () => {
    cy.mount(<GaugeUnit />)
    cy.getByData("gauge-unit").should("have.css", "border-width")
    cy.getByData("gauge-unit").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    )
  })
  it("can be set via props", () => {
    cy.mount(<GaugeUnit set={true} />)
    cy.getByData("gauge-unit").should("have.css", "border-width")
    cy.getByData("gauge-unit").should(
      "not.have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    )
  })
  it("switches value when clicked upon (multiple times)", () => {
    cy.mount(<GaugeUnit />)
    cy.getByData("gauge-unit").click()
    cy.getByData("gauge-unit").should(
      "not.have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    )
    cy.getByData("gauge-unit").click()
    cy.getByData("gauge-unit").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    )
  })
})
