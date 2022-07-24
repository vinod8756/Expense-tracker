import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {

const [selectedyear , setselectedyear] = useState('2020')

 const ExpenseFilterHandler = (year) => {
 	setselectedyear(year)
 }

 const filterExpense = props.data.filter(items => items.date.getFullYear().toString() === selectedyear)
	return (
		<div className = 'expenses'>
		<ExpenseFilter selectedyear = {selectedyear} filterExpense = {ExpenseFilterHandler} />
		{filterExpense.map(data => (
			<ExpenseItem
		   key = {data.id}
		   date = {data.date}
		   title = {data.title}
		   cost = {data.cost}/>
			))}


          </div>
		)
}
export default Expenses;