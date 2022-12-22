import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('1000');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log(selectedYear)
	};


	const filteredExpenses = props.items.filter(
		expee => {
			console.log(expee.amount);
				if (filteredYear !== '1000')
					return expee.date.getFullYear().toString() === filteredYear;
				else {
					if(expee.title !== "" )
						return expee;
				}
			
		});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpenseChart expenses={filteredExpenses} />
				{
					<ExpensesList items={filteredExpenses} />
				}

			</Card>
		</div>
	);
};

export default Expenses;