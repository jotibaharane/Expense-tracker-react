import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import "./Expenses.css"
function Expenses(props) {    
  return (
    <Card className='expenses'>
      {
        props.item.map((item)=>
            <ExpenseItem date={item.date}
            title={item.Title}
            amount={item.Amount} key={item.id} />
        )
      }
        
    </Card>
  )
}

export default Expenses