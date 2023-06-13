import React, { useState } from 'react';
import './Financial.css'

const Income = () => {
  const [revenues, setRevenues] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const [newRevenue, setNewRevenue] = useState({
    accountName: '',
    amount: 0,
  });

  const [newExpense, setNewExpense] = useState({
    accountName: '',
    amount: 0,
  });

  const handleRevenueInputChange = (e) => {
    setNewRevenue({ ...newRevenue, [e.target.name]: e.target.value });
  };

  const handleExpenseInputChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const handleAddRevenue = (e) => {
    e.preventDefault();
    setRevenues([...revenues, newRevenue]);
    setNewRevenue({ accountName: '', amount: 0 });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    setExpenses([...expenses, newExpense]);
    setNewExpense({ accountName: '', amount: 0 });
  };

  // Calculate the total revenue and total expense
  const totalRevenue = revenues.reduce((sum, revenue) => sum + parseFloat(revenue.amount), 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);

  // Calculate the net income
  const netIncome = totalRevenue - totalExpense;

  return (
    <div className="income-statement">
      <h2>Income Statement</h2>
      <div>
        <h3>Revenues</h3>
        <form onSubmit={handleAddRevenue}>
          <div className="form-group">
            <label htmlFor="revenueAccountName">Account Name:</label>
            <input
              type="text"
              id="revenueAccountName"
              name="accountName"
              value={newRevenue.accountName}
              onChange={handleRevenueInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="revenueAmount">Amount:</label>
            <input
              type="number"
              id="revenueAmount"
              name="amount"
              value={newRevenue.amount}
              onChange={handleRevenueInputChange}
            />
          </div>
          <button type="submit">Add Revenue</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {revenues.map((revenue, index) => (
              <tr key={index}>
                <td>{revenue.accountName}</td>
                <td>{revenue.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Expenses</h3>
        <form onSubmit={handleAddExpense}>
          <div className="form-group">
            <label htmlFor="expenseAccountName">Account Name:</label>
            <input
              type="text"
              id="expenseAccountName"
              name="accountName"
              value={newExpense.accountName}
              onChange={handleExpenseInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expenseAmount">Amount:</label>
            <input
              type="number"
              id="expenseAmount"
              name="amount"
              value={newExpense.amount}
              onChange={handleExpenseInputChange}
            />
          </div>
          <button type="submit">Add Expense</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.accountName}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="summary">
        <h3>Summary</h3>
        <div>Total Revenue: {totalRevenue}</div>
        <div>Total Expense: {totalExpense}</div>
        <div>Net Income: {netIncome}</div>
      </div>
    </div>
  );
};

export default Income;
