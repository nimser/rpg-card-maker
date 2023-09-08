import { useState } from "react"
import styles from "./Gauge.module.css"
import GaugeUnit from "./GaugeUnit"

interface GaugeProps {
  initValue?: number
}

const Gauge = ({ initValue }: GaugeProps) => {
  const [value, setValue] = useState(initValue || 0)

  return (
    <div className={styles.gauge} data-test="gauge">
      {Array.from(Array(5)).map((_, i) => (
        <GaugeUnit
          key={i}
          set={i + 1 <= value}
          onClick={() => setValue(i + 1)}
        />
      ))}
    </div>
  )
}

export default Gauge
