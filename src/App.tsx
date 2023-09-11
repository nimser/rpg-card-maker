import { useState } from "react"
import styles from "./App.module.css"
import Gauge from "./components/Gauge"
import HeroSelector from "./components/HeroSelector"
import heroes from "../cypress/fixtures/heroes.json"
import { Hero } from "./components/HeroCard"
import BonusCounter from "./components/BonusCounter"

function App() {
  const [name, setName] = useState("")
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null)
  const [remainingBonusPoints, setRemainingBonusPoints] = useState(2)

  const selectHero = (hero: Hero) => {
    setRemainingBonusPoints(2)
    setSelectedHero(() => ({ ...hero, name: name }))
  }

  const attributeBonusPoints = (
    property: "charism" | "endurance" | "strength",
    originalValue: number,
    targetValue: number
  ) => {
    const difference = targetValue - originalValue
    if (originalValue < targetValue && difference <= remainingBonusPoints) {
      setSelectedHero((old) => {
        return old
          ? {
              ...old,
              [property]: old[property] + difference,
            }
          : null
      })
      setRemainingBonusPoints((old) => old - difference)
    }
  }

  return (
    <main className={styles.app}>
      <h1 data-test="title">RPG Hero Generator</h1>
      <div>
        Your are{" "}
        <input
          value={name}
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
          data-test="hero-name"
        />
      </div>
      <HeroSelector heroes={heroes} onSelect={selectHero} />
      {selectedHero && (
        <>
          <BonusCounter value={remainingBonusPoints} />
          <div className={styles.specs}>
            <div>
              <h3>Strength</h3>
              <Gauge
                value={selectedHero.strength}
                setValue={attributeBonusPoints.bind(
                  null,
                  "strength",
                  selectedHero.strength
                )}
              />
            </div>
            <div>
              <h3>Endurance</h3>
              <Gauge
                value={selectedHero.endurance}
                setValue={attributeBonusPoints.bind(
                  null,
                  "endurance",
                  selectedHero.endurance
                )}
              />
            </div>
            <div>
              <h3>Charism</h3>
              <Gauge
                value={selectedHero.charism}
                setValue={attributeBonusPoints.bind(
                  null,
                  "charism",
                  selectedHero.charism
                )}
              />
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default App
