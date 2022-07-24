import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {

const [selectedyear , setselectedyear] = useState('2020')

const data = props.data 

 const ExpenseFilterHandler = (year) => {
 	setselectedyear(year)
 }

const removeExpenseHandler = (id) => {
 const updatedArray = data.filter(items => items.id !== id)
 props.updatedData(updatedArray)
}


 const filterExpense = data.filter(items => items.date.getFullYear().toString() === selectedyear)
	return (
		<div className = 'expenses'>
		<ExpenseFilter selectedyear = {selectedyear} filterExpense = {ExpenseFilterHandler} />
		<ExpensesChart expenses = {filterExpense} />
		{filterExpense.map(data => (
			<ExpenseItem
		   removeExpense = {removeExpenseHandler}
		   key = {data.id}
		   id = {data.id}
		   date = {data.date}
		   title = {data.title}
		   cost = {data.cost}/>
			))}


          </div>
		)
}
export default Expenses;