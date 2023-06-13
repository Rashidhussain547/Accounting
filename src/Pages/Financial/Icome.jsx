import React from 'react';
import './Financial.css'

const Income= () => {
  // DATA
  const revenues = [
    { accountName: 'Revenue 1', amount: 100 },
    { accountName: 'Revenue 2', amount: 200 },
    { accountName: 'Revenue 3', amount: 150 },
  ];

  const expenses = [
    { accountName: 'Expense 1', amount: 50 },
    { accountName: 'Expense 2', amount: 80 },
    { accountName: 'Expense 3', amount: 120 },
  ];

  // Calculate total revenue and total expense
  const totalRevenue = revenues.reduce((sum, revenue) => sum + revenue.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Calculate net income
  const netIncome = totalRevenue - totalExpense;

  return (
    <div className="income-statement">
      <h2>Income Statement</h2>
      <div>
        <h3>Revenues</h3>
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
          <tfoot>
            <tr>
              <td>Total Revenues:</td>
              <td>{totalRevenue}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
        <h3>Expenses</h3>
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
          <tfoot>
            <tr>
              <td>Total Expenses:</td>
              <td>{totalExpense}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
        <h3>Net Income</h3>
        <div>{netIncome}</div>
      </div>
    </div>
  );
};

export default Income;
