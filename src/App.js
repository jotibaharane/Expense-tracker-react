import { useEffect, useState } from "react";
import Expenses from "./component/expense/Expenses";
import NewExpence from "./component/newExpence/NewExpence";
  
function App() {
  const [expenses, setExpenses] = useState([]);
  const fetchData=()=>{
    fetch("http://localhost:3000/Expense").then(
      Response=>{
      return Response.json()
    }).then(data=>{
     setExpenses(data)
    });

  }
  useEffect(()=>{
    fetchData();
  },[])
  
  const addExpenceHandler = (expense) => {
    
      fetch("http://localhost:3000/Expense",{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(expense)
      }).then(Response=>{
        fetchData()
      })
     
  };
  return (
    <div className="App">
      <NewExpence onAddExpence={addExpenceHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
