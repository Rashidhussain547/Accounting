import React, { useState } from 'react';
import './Journal.css'

const Journal = () => {
  const [debit, setDebit] = useState({ accountName: '', accountType: '', amount: '' });
  const [credit, setCredit] = useState({ accountName: '', accountType: '', amount: '' });
  const [description, setDescription] = useState('');

  const handleDebitChange = (e) => {
    setDebit({ ...debit, [e.target.name]: e.target.value });
  };
  
  const handleCreditChange = (e) => {
    setCredit({ ...credit, [e.target.name]: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission
    console.log('Debit:', debit);
    console.log('Credit:', credit);    
    console.log('Description:', description);
    // Reset the form
    setDebit({ accountName: '', accountType: '', amount: '' });
    setCredit({ accountName: '', accountType: '', amount: '' });
    setDescription('');
  };

  return (
    <div className="journal-form">
      <h2>Journal Entries </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <h3>Debit</h3>
            <div className="form-group">
              <label htmlFor="debitAccountName">Account Name</label>
              <input
                type="text"
                id="debitAccountName"
                name="accountName"
                value={debit.accountName}
                onChange={handleDebitChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="debitAccountType">Account Type</label>
              <input
                type="text"
                id="debitAccountType"
                name="accountType"
                value={debit.accountType}
                onChange={handleDebitChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="debitAmount">Amount</label>
              <input
                type="number"
                id="debitAmount"
                name="amount"
                value={debit.amount}
                onChange={handleDebitChange}
              />
            </div>
          </div>
          <div className="form-column">
            <h3>Credit</h3>
            <div className="form-group">
              <label htmlFor="creditAccountName">Account Name</label>
              <input
                type="text"
                id="creditAccountName"
                name="accountName"
                value={credit.accountName}
                onChange={handleCreditChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditAccountType">Account Type</label>
              <input
                type="text"
                id="creditAccountType"
                name="accountType"
                value={credit.accountType}
                onChange={handleCreditChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditAmount">Amount</label>
              <input
                type="number"
                id="creditAmount"
                name="amount"
                value={credit.amount}
                onChange={handleCreditChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Journal;
