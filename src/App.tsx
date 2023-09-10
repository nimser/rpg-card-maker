import { useState } from "react"
import styles from "./App.module.css"
import Gauge from "./components/Gauge"
import HeroSelector from "./components/HeroSelector"
import heroes from "../cypress/fixtures/heroes.json"
import { Hero } from "./components/HeroCard"

function App() {
  const [name, setName] = useState("")
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null)

  const selectHero = (hero: Hero) => {
    setSelectedHero(() => ({ ...hero, name: name }))
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
        <div className={styles.specs}>
          <div>
            <h3>Strength</h3>
            <Gauge initValue={selectedHero.strength} />
          </div>
          <div>
            <h3>Endurance</h3>
            <Gauge initValue={selectedHero.endurance} />
          </div>
          <div>
            <h3>Charism</h3>
            <Gauge initValue={selectedHero.charism} />
          </div>
        </div>
      )}
    </main>
  )
}

export default App
