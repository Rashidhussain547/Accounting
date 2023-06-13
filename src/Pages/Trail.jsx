import React, { useState } from 'react';
import './Trail.css'

const Trail = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    accountName: '',
    debitBalance: 0,
    creditBalance: 0,
  });

  const handleInputChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  const handleAddAccount = (e) => {
    e.preventDefault();
    setAccounts([...accounts, newAccount]);
    setNewAccount({ accountName: '', debitBalance: 0, creditBalance: 0 });
  };

  // Calculate the sum of debit and credit balances
  const totalDebit = accounts.reduce((sum, account) => sum + parseInt(account.debitBalance), 0);
  const totalCredit = accounts.reduce((sum, account) => sum + parseInt(account.creditBalance), 0);

  return (
    <div className='trail-balance'>
      <h2>Trail Balance</h2>
      <form onSubmit={handleAddAccount}>
        <div>
          <label htmlFor="accountName">Account Name:</label>
          <input
            type="text"
            id="accountName"
            name="accountName"
            value={newAccount.accountName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="debitBalance">Debit Balance:</label>
          <input
            type="number"
            id="debitBalance"
            name="debitBalance"
            value={newAccount.debitBalance}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="creditBalance">Credit Balance:</label>
          <input
            type="number"
            id="creditBalance"
            name="creditBalance"
            value={newAccount.creditBalance}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Account</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Debit Balance</th>
            <th>Credit Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.accountName}</td>
              <td>{account.debitBalance}</td>
              <td>{account.creditBalance}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalDebit}</td>
            <td>{totalCredit}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Trail;