// Write your code here
import './index.css'

const TransactionItem = props => {
  const {balanceDetails, onDeleteTrans} = props
  const {title, amount, type, id} = balanceDetails

  const onClickDeleteBtn = () => {
    onDeleteTrans(id)
  }

  return (
    <li className="list-item">
      <p className="list-para">{title}</p>
      <p className="list-para">{amount}</p>
      <p className="list-para">{type}</p>
      <div>
        <button
          type="button"
          testid="delete"
          className="button-del"
          onClick={onClickDeleteBtn}
        >
          <img
            className="del-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
