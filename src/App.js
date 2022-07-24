import React,{useState} from 'react'
import Expenses from './Components/Expenses'
import AddExpense from './Components/AddExpense'


  const DummyData = [
  {
    id : '1',
    title : 'toilet paper',
    cost : 25,
    date : new Date(2021 , 7 , 8)
  },

  {
    id : '2',
    title : 'car insurance',
    cost : 250,
    date : new Date(2021 , 8 , 4)
  },

  { id : '3',
    title : 'Groceries',
    cost : 45,
    date : new Date(2021 , 6 , 2)
  },

  { id : '4',
    title : 'clothes',
    cost : 150,
    date : new Date(2021 , 3 , 4)
  }]


function App() {

const [data ,setdata] = useState(DummyData)

const dataHandler = (data) => {
  setdata((prevstate) => [data , ...prevstate] )
}

const removeExpense = (updatedData) => {
  setdata(updatedData)
}
  return (
    <div >
      <AddExpense onAddData = {dataHandler}/>
      <Expenses data = {data} updatedData = {removeExpense}/>
    </div>
  );
}

export default App;
