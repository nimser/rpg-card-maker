import { useEffect, useState } from "react"
import styles from "./Gauge.module.css"
import GaugeUnit from "./GaugeUnit"

interface GaugeProps {
  value: number
  setValue: (targetValue: number) => void
}

const Gauge = ({ value, setValue }: GaugeProps) => {
  const handleClick = (targetValue: number) => {
    setValue(targetValue)
  }

  return (
    <div className={styles.gauge} data-test="gauge" data-gauge-value={value}>
      {Array.from(Array(5)).map((_, i) => (
        <GaugeUnit
          key={i}
          set={i + 1 <= value}
          onClick={handleClick.bind(null, i + 1)}
        />
      ))}
    </div>
  )
}

export default Gauge
