import React from 'react'

function Transaction(props) {
    return (
        
        <div className={(parseInt(props.trans.amt) >0)? "Transaction-green" : "Transaction-red"}>
            <p>{props.trans.text}</p>
            <p>{props.trans.amt}</p>
        </div>
    )
}

export default Transaction
