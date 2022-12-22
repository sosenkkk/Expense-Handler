import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {

    if (props.items.length ===0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
	}

    return <ul className="expenses-list">
        {props.items.map((expee) => (
            <ExpenseItem
                key={expee.id}
                title={expee.title}
                amount={expee.amount}
                date={expee.date}
            />
        ))}
    </ul>

};


export default ExpensesList