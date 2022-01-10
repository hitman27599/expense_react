import React from 'react'
import '../App.css';

function Balance(props) {
    return (
        <div className="yourbalance">
            <h3 className="balancedetails">Your Balance</h3>
            <h1 className="balancedetails">${props.balance}</h1>
        </div>
    )
}

export default Balance
