import styles from "./HeroCard.module.css"

interface HeroProps {
  image: string
  selected?: boolean
  name?: string
  strength?: number
  endurance?: number
  charism?: number
}

const HeroCard = ({
  image,
  selected,
  name,
  strength,
  endurance,
  charism,
}: HeroProps) => {
  const hasOverlay = !!(name || strength || endurance || charism)
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : undefined}`}
      data-test="hero-card"
    >
      <img className={styles.image} src={image} alt="" data-test="hero-image" />
      {hasOverlay && (
        <div className={styles.overlay}>
          {!!name && <h1 className={styles.name}>{name}</h1>}
          <div className={styles.specs}>
            <div>S{strength}</div>
            <div>E{endurance}</div>
            <div>C{charism}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroCard
