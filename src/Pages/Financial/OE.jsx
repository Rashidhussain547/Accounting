import React from 'react';
import './Financial.css'

const OE = () => {
  // Predefined data
  const equityData = [
    { accountName: 'Account 1', amount: 100 },
    { accountName: 'Account 2', amount: 200 },
    { accountName: 'Account 3', amount: 150 },
  ];

  // Calculate the sum of account amounts
  const sumOfAccounts = equityData.reduce((sum, account) => sum + account.amount, 0);

  // Predefined data for withdrawals and losses
  const withdrawalsAndLosses = [
    { accountName: 'Withdrawals', amount: 50 },
    { accountName: 'Losses during period', amount: 30 },
  ];

  // Calculate the sum of withdrawals and losses
  const sumOfWithdrawalsAndLosses = withdrawalsAndLosses.reduce((sum, account) => sum + account.amount, 0);

  // Calculate the owner's equity
  const ownerEquity = sumOfAccounts - sumOfWithdrawalsAndLosses;

  return (
    <div className="owner-equity-statement">
      <h2>Owner's Equity Statement</h2>
      <div className="column-container">
        <div className="column">
          <h3>Accounts</h3>
          {equityData.map((account, index) => (
            <div key={index}>
              <span>{account.accountName}</span>
              <span>{account.amount}</span>
            </div>
          ))}
          <div className="total-accounts">
            <span>Total</span>
            <span>{sumOfAccounts}</span>
          </div>
        </div>
        <div className="column">
          <h3>Withdraws and Losses</h3>
          {withdrawalsAndLosses.map((account, index) => (
            <div key={index}>
              <span>{account.accountName}</span>
              <span>{account.amount}</span>
            </div>
          ))}
          <div className="total-withdrawals-losses">
            <span>Total</span>
            <span>{sumOfWithdrawalsAndLosses}</span>
          </div>
        </div>
      </div>
      <div className="owner-equity">
        <span>Owner's Equity</span>
        <span>{ownerEquity}</span>
      </div>
    </div>
  );
};

export default OE;
