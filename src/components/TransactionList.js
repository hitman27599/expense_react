import React,{useState,useEffect} from 'react'
import Transaction from './Transaction'

function TransactionList(props) {
    const [list,setList] = useState(props.list)
    console.log(props.list)
    // useEffect(()=>{
        const listtrans = props.list.map((listcpy,index) =><Transaction trans={listcpy} key={index}/>)
    // })
    
    return (
        <div className="transactionList">
            <h3 className="transactionListHeader">history</h3>
            {listtrans}
            
            {/* <Transaction name={list.text} amount={list.amt}/> */}
        </div>
    )
}

export default TransactionList
