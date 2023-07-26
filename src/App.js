import React, {useState} from 'react'

import Expenses from './components/Expenses';
import NewExpense from './NewExpense/NewExpense';


let DUMMY_EXPENSE = [
    {
        id:'e1',
        title: 'school Fee',
        amount : '250',
        date : '20 may 2023'
    }, 
    {
        id:'e2',
        title: 'Books',
        amount : '230',
        date : '05 june 2023'
    },
    {
        id:'e3',
        title: 'House Rent',
        amount : '750',
        date : '25 Aug 2023'
    },
    {
        id:'e4',
        title: 'Food',
        amount : '550',
        date : '10 Mar 2023'
    }

];

const App = () => {

   const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) =>{
           const updatedExpense = [expense, ...expenses];
           setExpenses(updatedExpense);
    };



  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses item = {expenses} />

    </div>
  )
}

export default App;