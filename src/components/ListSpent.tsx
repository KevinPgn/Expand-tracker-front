import { useExpenses } from '../store/Expenses'
import '../style/ListSpent.css'

export const ListSpent = () => {
  const tags = useExpenses(state => state.tags)  
  const expenses = useExpenses(state => state.expenses)

  console.log(expenses);
  

  return <>
    <div className="list-spent">
      <div className="spent-today">
        <h2>Today</h2>
        <span>$0</span>
      </div>
      <ul>
        {expenses.map(expense => {
          const tag = tags.find(tag => tag.tag === expense.tag)
          return <div className='card-expenses' key={expense.id}>
            <div className="left">
              <span className='emoji'>{tag?.emoji}</span>
              <div className="tag-date">
                <h3>{expense.tag}</h3>
                <span>{expense.createAt}</span>
              </div>
            </div>
            <div className="right">
              <span>${expense.amount}</span>
            </div>
          </div>
        })}
      </ul>
    </div>
  </>
}