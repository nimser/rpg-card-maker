import { useState } from "react"
import styles from "./GaugeUnit.module.css"

interface GaugeUnitProps {
  set?: boolean
}

const GaugeUnit = ({ set }: GaugeUnitProps) => {
  const [isSet, setIsSet] = useState(set)
  return (
    <div
      className={isSet ? styles.set : styles.unset}
      data-test="gauge-unit"
      onClick={() => setIsSet((old) => !old)}
    ></div>
  )
}

export default GaugeUnit
