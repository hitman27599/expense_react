import React from 'react'

function IncomeExpense(props) {
    return (
        <div className="incomeExpense">
            <div className="incomeExpense-box">
                <h4 >Income</h4>
                <p className="green">${props.income}</p>
            </div>
            <div className="incomeExpense-box">
                <h4>Expense</h4>
                <p className="red">${props.expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
