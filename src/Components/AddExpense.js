import React,{useState} from 'react'
import './AddExpense.css'
import AddExpenseForm from './AddExpenseForm'

function AddExpense(props) {
       
  const [data , setdata] = useState({
  	id: '',
  	title : '',
  	cost : '',
  	date : '',
  })

  const [showform , setshowform] = useState(false)     

 const sumbitHandler = (e) => {
 	e.preventDefault()
 	props.onAddData({
 		id : Math.random(),
 		title : data.title,
 		cost : data.cost,
 		date : new Date(data.date)
 	})
 	setdata({
 	id: '',
  	title : '',
  	cost : '',
  	date : '',
 	})
 }

  return(
  	<div className = 'container'>

   {showform ? <AddExpenseForm setdata ={setdata} data = {data} sumbitHandler = {sumbitHandler} setshowform = {setshowform} /> : <button onClick = {() => setshowform(true)}>Add Expense</button>}

  	</div>
  	)

}

export default AddExpense;