interface BonusCounterProps {
  value: number
}

const BonusCounter = ({ value }: BonusCounterProps) => (
  <div>
    Bonus left: <span data-test="bonus-counter">{value}</span>
  </div>
)

export default BonusCounter
