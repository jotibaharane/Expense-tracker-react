import React, { useState } from 'react'
import "./ExpenceForm.css"
function ExpenceForm(props) {
    const [enterTitle,setTitle]=useState('')
    const [enterDate,setDate]=useState('')
    const [enterAmount,setAmount]=useState('')
    const titleChangeHandler=(e)=>{
        setTitle(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        setAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        setDate(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenceData={
            Title:enterTitle,
            Amount:enterAmount,
            date:new Date(enterDate)
        }
        props.onSaveExpenceData(expenceData);
        setAmount('')
        setDate('')
        setTitle('')
      
    }
    
  return (
    <form onSubmit={submitHandler}>
        <div className="new-expence_controles">
            <div className="new-expence_control">
                <label>Title</label>
                <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expence_control">
                <label>Amount</label>
                <input type="number" min='0.01' step="0.01" value={enterAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expence_control">
                <label>Date</label>
                <input type="date" value={enterDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expence_action">
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenceForm