import React,{useState} from 'react'

function AddTransaction(props) {
    const [text,setText] = useState("")
    const [amt,setAmt] = useState("")
    function onClickAddTransaction(text,amt){
        console.log("clicking")
        props.onsubmitTrans(text,amt)
        setAmt("")
        setText("")
    }
    return (
        <div>
            <h3 className="AddTransactionHeader">Add New Transaction</h3>
            <div className="AddTransactionContainer">
                <div className="textBox">
                    <label className="marginBottom">Text</label>
                    <input value={text} onChange={(e)=>{setText(e.target.value)}} className="InputTextBox" placeholder="enter text"></input>
                </div>
                <div className="textBox">
                    <label>Amount</label>
                    <span className="marginBottom">(positive for income , negative for expense)</span>
                    <input value={amt} onChange={(e)=>{setAmt(e.target.value)}} className="InputTextBox" placeholder="enter Amount"></input>
                </div>
                <button type="submit" className="submitButton" onClick={()=> onClickAddTransaction(text,amt)}>Add transaction</button>
            </div>
        </div>
    )
}

export default AddTransaction
