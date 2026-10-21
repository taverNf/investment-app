export default function UserForm() {
  return(
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">initial investment</label>
          <input type="number" id="initialInvestment"/>
        </div>
        
        <div>
          <label htmlFor="annualInvestment">annual investment</label>
          <input type="number" id="annualInvestment"/>
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">expected return</label>
          <input type="number" id="expectedReturn"/>
        </div>
        
        <div>
          <label htmlFor="duration">duration</label>
          <input type="number" id="duration"/>
        </div>
      </div>
    </div>
  )
}