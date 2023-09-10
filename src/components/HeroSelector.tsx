import { useState } from "react"
import HeroCard, { Hero } from "./HeroCard"
import styles from "./HeroSelector.module.css"

interface HeroSelectorProps {
  heroes: Hero[]
  onSelect?: (hero: Hero) => void
}

const HeroSelector = ({ heroes, onSelect }: HeroSelectorProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleSelect = (hero: Hero, index: number) => {
    setSelectedIndex(index)
    if (onSelect) onSelect(hero)
  }

  return (
    <div className={styles.selector}>
      {heroes.map((hero, index) => (
        <div key={index} onClick={handleSelect.bind(null, hero, index)}>
          <HeroCard image={hero.image} selected={index === selectedIndex} />
        </div>
      ))}
    </div>
  )
}

export default HeroSelector
