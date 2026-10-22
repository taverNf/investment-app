export default function UserInput({  userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={e => onChangeInput('initialInvestment', e.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={e => onChangeInput('annualInvestment', e.target.value)}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            onChange={e => onChangeInput('expectedReturn', e.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={e => onChangeInput('duration', e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  )
}
