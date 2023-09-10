import HeroSelector from "../../src/components/HeroSelector"
import heroes from "../fixtures/heroes.json"

it("Loads as many cards as heroes", () => {
  cy.mount(<HeroSelector heroes={heroes} />)
  cy.getByData("hero-card").should("have.length", 3)
})
it("Selects hero on click", () => {
  const selectHandlerStub = cy.stub()
  cy.mount(<HeroSelector heroes={heroes} onSelect={selectHandlerStub} />)
  cy.getByData("hero-card")
    .last()
    .click()
    .then(($hero) => {
      expect($hero[0].className).to.match(/_selected/)
      expect(selectHandlerStub).to.have.been.called
    })
})
