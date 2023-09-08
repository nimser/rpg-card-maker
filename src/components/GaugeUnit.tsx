import styles from "./GaugeUnit.module.css"

interface GaugeUnitProps {
  set?: boolean
  onClick?: () => void
}

const GaugeUnit = ({ set, onClick }: GaugeUnitProps) => {
  return (
    <div
      className={set ? styles.set : styles.unset}
      data-test="gauge-unit"
      onClick={onClick}
    ></div>
  )
}

export default GaugeUnit
