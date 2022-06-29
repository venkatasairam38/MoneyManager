import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    balanceDetails: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newList = {
      id: v4(),
      title: titleInput,
      amount: amountInput,
      type: displayText,
    }

    this.setState(prevState => ({
      balanceDetails: [...prevState.balanceDetails, newList],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeInputTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTransType = event => {
    this.setState({optionId: event.target.value})
  }

  onDeleteTrans = id => {
    const {balanceDetails} = this.state
    const updatedBalanceList = balanceDetails.filter(each => each.id !== id)
    this.setState({balanceDetails: updatedBalanceList})
  }

  getExpenses = () => {
    const {balanceDetails} = this.state
    let expensesAmount = 0

    balanceDetails.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {balanceDetails} = this.state
    let incomeAmount = 0
    balanceDetails.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getBalance = () => {
    const {balanceDetails} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    balanceDetails.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {balanceDetails, optionId, titleInput, amountInput} = this.state
    const incomeAmount = this.getIncome()
    const balanceAmount = this.getBalance()
    const expensesAmount = this.getExpenses()
    console.log(incomeAmount)
    return (
      <div className="bg-cont">
        <div className="name-cont">
          <h1>Hi,Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails
          incomeAmount={incomeAmount}
          balanceAmount={balanceAmount}
          expensesAmount={expensesAmount}
        />
        <div className="user-details">
          <div className="form-cont">
            <h1>Add Transactions</h1>
            <form className="form-ele" onClick={this.onAddTransaction}>
              <label htmlFor="Title">TITLE</label>
              <input
                type="text"
                id="Title"
                value={titleInput}
                placeholder="TITLE"
                className="input"
                onChange={this.onChangeInputTitle}
              />

              <label htmlFor="Amount">AMOUNT</label>
              <input
                type="text"
                id="Amount"
                value={amountInput}
                placeholder="AMOUNT"
                className="input"
                onChange={this.onChangeAmount}
              />

              <label htmlFor="Type">TYPE</label>
              <select
                id="Type"
                className="select"
                value={optionId}
                onChange={this.onChangeTransType}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="trans-details">
            <h1>History</h1>
            <ul className="ul-list">
              <li className="history-items">
                <p className="his-heading">Title</p>
                <p className="his-heading">Amount</p>
                <p className="his-heading">Type</p>
              </li>

              {balanceDetails.map(each => (
                <TransactionItem
                  balanceDetails={each}
                  key={each.id}
                  onDeleteTrans={this.onDeleteTrans}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
