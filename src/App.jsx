import { useState } from 'react'

import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = userInput.duration >= 1

  function handleChange(inputId, newValue) {
    // [inputId] sempre será igual a uma das propriedades do objeto [userInput]
    setUserInput(prev => {
      return {
        ...prev,
        [inputId]: +newValue, // [+] muda o tipo de dado de string para number
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  )
}

export default App
