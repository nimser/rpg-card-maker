interface BonusCounterProps {
  value: number
}

const BonusCounter = ({ value }: BonusCounterProps) => (
  <div
    style={{
      border: "1px solid black",
      padding: ".5rem",
      borderRadius: ".5rem",
      alignSelf: "end",
    }}
  >
    Bonus left: <span data-test="bonus-counter">{value}</span>
  </div>
)

export default BonusCounter
