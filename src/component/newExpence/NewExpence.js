import React from 'react'
import "../newExpence/NewExpense.css"
import ExpenceForm from './ExpenceForm'
function NewExpence(props) {
    const saveExpenseDataHandler=(enterdExpenceData)=>{
        const expenceData={
            ...enterdExpenceData,
            id:Math.random().toString()
        }
        props.onAddExpence(expenceData)
    }
  return (
    <div className='new-expence'>
            <ExpenceForm onSaveExpenceData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpence