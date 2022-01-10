import './App.css';
import {useState,useEffect} from 'react'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import ErrorMessage from './components/ErrorMessage';
import SuccessMsg from './components/SuccessMsg';

function App() {
  const [balance,setBalance] = useState(0)
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)
  const [err,setErr] = useState(false)
  const [success,setSuccess] = useState(false)

  const [list,setList] = useState([])

  useEffect(()=>{
    const timeid = setTimeout(()=>{
      setErr(false)
      setSuccess(false)
    },3000)
  },[err,success])

  function check (text,amt){
    if(parseInt(amt) && text){
      setErr(false)
      setSuccess(true)
      return true
    }
    else{
      setErr(true)
      setSuccess(false)
      return false
    }
  }


  const addTransaction = (text,amt1) => {
    console.log(text)
    console.log(amt1)
    const amt =parseInt(amt1)
    if(check(text,amt1)){
      if(amt>0){
        setIncome(income + amt)
        setBalance(balance +amt)
      }else{
        setExpense(expense +amt)
        setBalance(balance +amt)
      }
      const newList = {text:text,amt:amt}
      setList([...list,newList])
    }
  }

  return (
    <div className="App">
      <div className="App1">
        <Header/>
        <div className="container">
          <Balance balance={balance}/>
          <IncomeExpense income={income} expense={expense}/>
          <TransactionList list={list}/>
          <AddTransaction onsubmitTrans = {addTransaction}/>
          {(err)? <ErrorMessage/>: null }
          {(success)? <SuccessMsg/>: null }
        </div>
      </div>
      
    </div>
  );
}

export default App;
