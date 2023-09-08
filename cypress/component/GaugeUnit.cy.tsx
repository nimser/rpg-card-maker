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
  it("Should call provided onClick method", () => {
    const onClickSpy = cy.spy().as("onClickSpy")
    cy.mount(<GaugeUnit onClick={onClickSpy} />)
    cy.getByData("gauge-unit").click()
    cy.get("@onClickSpy").should("have.been.called")
  })
})
