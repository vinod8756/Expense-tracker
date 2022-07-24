import React from 'react'
import './AddExpense.css'

const AddExpenseForm = (props) => {
	return(
		<div>
	         <form className = 'form'>
	         <div>
	           <label>Title</label>
	           <input type= 'text'
	                  value = {props.data.title} 
	                  onChange = {(e) => props.setdata((prevstate) => { return {...prevstate , title : e.target.value}})}/>
	         </div>
	   
	           <div>
	           <label>Price</label>
	           <input type= 'number' 
	                  value = {props.data.cost} 
	                  onChange = {(e) => props.setdata((prevstate) => { return {...prevstate , cost : e.target.value}})}/>
	           </div>
	   
	           <div>
	           <label>Date</label>
	           <input type= 'date' 
	                value = {props.data.date} 
	                onChange = {(e) => props.setdata((prevstate) => { return {...prevstate , date : e.target.value}})}/>
	           </div>
	          </form>
           <div className = 'AddExpense__actions'>
             <button onClick = {props.sumbitHandler}> Add Expense</button>
             <button onClick = {() => props.setshowform(false)} >Cancel</button>
         </div>
         </div>
         )
}

export default AddExpenseForm;