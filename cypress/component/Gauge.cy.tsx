import Gauge from "../../src/components/Gauge"

describe("Gauge.cy.tsx", () => {
  it("mounts with 5 GaugeUnits", () => {
    cy.mount(<Gauge />)
    cy.getByData("gauge-unit").should("have.length", 5)
  })
  it("is displayed properly", () => {
    cy.mount(<Gauge />)
    cy.getByData("gauge").should("have.css", "display", "flex")
  })
  it("should get initialised with a default value", () => {
    cy.mount(<Gauge initValue={2} />)
    cy.getByData("gauge-unit").should(($units) => {
      expect($units[0].className).to.match(/_set/)
      expect($units[1].className).to.match(/_set/)
      expect($units[2].className).to.match(/_unset/)
      expect($units[3].className).to.match(/_unset/)
      expect($units[4].className).to.match(/_unset/)
    })
  })
  it("should change value on click", () => {
    cy.mount(<Gauge />)
    cy.getByData("gauge-unit").first().next().next().click()
    cy.getByData("gauge-unit").should(($units) => {
      expect($units[0].className).to.match(/_set/)
      expect($units[1].className).to.match(/_set/)
      expect($units[2].className).to.match(/_set/)
      expect($units[3].className).to.match(/_unset/)
      expect($units[4].className).to.match(/_unset/)
    })
  })
})
