import { useState } from 'react'

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(inputId, newValue) {
    setUserInput(prev => {
      return {
        ...prev,
        [inputId]: newValue,
      }
    })
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={userInput.initialInvestment}
            onChange={e => handleChange('initialInvestment', e.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={userInput.annualInvestment}
            onChange={e => handleChange('annualInvestment', e.target.value)}
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
            onChange={e => handleChange('expectedReturn', e.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={e => handleChange('duration', e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  )
}
