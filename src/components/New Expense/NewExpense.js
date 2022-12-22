import React, {useState} from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=> {
    const [check, setCheck] = useState(0);
    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    const addHandler = () => {
        setCheck(1);
    };
    const cancelHandler = () => {
        setCheck(0);
    };
    return (
        <div className="new-expense">
            {check===0 && <button onClick={addHandler}  >Add new Expense</button>}
            {check ===1 &&<ExpenseForm onSaveExpenseData ={onSaveExpenseDataHandler} onCancel={cancelHandler} />}
        </div>
    );
};

export default NewExpense;