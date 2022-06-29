import './index.css'

// Write your code here
const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expensesAmount} = props

  return (
    <div className="money-details-card">
      <div className="moneyDetails-card Balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p>Your Balance</p>
          <h1>Rs {balanceAmount}</h1>
        </div>
      </div>
      <div className="moneyDetails-card Income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p>Your Income</p>
          <h1>Rs {incomeAmount}</h1>
        </div>
      </div>
      <div className="moneyDetails-card Expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p>Your Expenses</p>
          <h1>Rs {expensesAmount}</h1>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
