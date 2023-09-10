import HeroCard from "../../src/components/HeroCard"
import heroes from "../fixtures/heroes.json"

it("Loads the hero's image", () => {
  cy.mount(<HeroCard image={heroes[1].image} />)
  cy.getByData("hero-image").should("have.attr", "src", heroes[1].image)
})

it("is selected via props", () => {
  cy.mount(<HeroCard image={heroes[1].image} selected={true} />)
  cy.getByData("hero-card").then(($card) => {
    expect($card[0].className).to.match(/_selected/)
  })
})
it("accepts optional props", () => {
  // name/strength/endurance/charism
  cy.mount(
    <HeroCard
      image={heroes[1].image}
      name="Zwarg"
      strength={5}
      endurance={2}
      charism={3}
    />
  )
  cy.getByData("hero-card").contains("Zwarg")
  cy.getByData("hero-card").contains("S5")
  cy.getByData("hero-card").contains("E2")
  cy.getByData("hero-card").contains("C3")
})
