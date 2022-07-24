import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import { RiCloseCircleLine } from 'react-icons/ri';

function ExpenseItem(props) {


return(
	<div className = 'expense-item' >
      <ExpenseDate date = {props.date}/>
		<div className = 'expense-item__description'>
			<h2>{props.title}</h2>
			<p className = 'expense-item__price'>${props.cost}</p>
         <RiCloseCircleLine
         style = {{color : "#fff" }} size = "2rem" onClick={() => props.removeExpense(props.id)}
        />
		</div>
	</div>

	)
}

export default ExpenseItem;