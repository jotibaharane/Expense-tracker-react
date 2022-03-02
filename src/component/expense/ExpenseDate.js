import React from "react";
import "./ExpenseDate.css"
function ExpenseDate(props) {
  let date=props.date.toLocaleString('en-US',{day:"2-digit"});
  let year=props.date.getFullYear();
  let month=props.date.toLocaleString('en-US',{month:"long"});
  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{date}</div>
    </div>
  );
}

export default ExpenseDate;
