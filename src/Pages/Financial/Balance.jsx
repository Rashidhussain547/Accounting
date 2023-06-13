import React from 'react';
import './Financial.css'

const Balance= () => {
  // Predefined data for assets
  const assetsData = [
    { accountName: 'Asset 1', amount: 500 },
    { accountName: 'Asset 2', amount: 700 },
    { accountName: 'Asset 3', amount: 300 },
  ];

  // Predefined data for liabilities
  const liabilitiesData = [
    { accountName: 'Liability 1', amount: 200 },
    { accountName: 'Liability 2', amount: 400 },
    { accountName: 'Liability 3', amount: 100 },
  ];

  // Calculate total assets amount
  const totalAssets = assetsData.reduce((total, account) => total + account.amount, 0);

  // Calculate total liabilities amount
  const totalLiabilities = liabilitiesData.reduce((total, account) => total + account.amount, 0);

  // Calculate owner's equity
  const ownerEquity = totalAssets - totalLiabilities;

  const CheckEquality = totalLiabilities + ownerEquity;

  // Check if assets and liabilities/owner's equity are equal
  const isBalanceEqual = totalAssets === totalLiabilities + ownerEquity;

  return (
    <div className="balance-sheet-statement">
      <h2>Balance Sheet Statement</h2>
      <div className="section">
        <div className="column">
          <h3>Assets</h3>
          {assetsData.map((account, index) => (
            <div key={index}>
              <span>{account.accountName}</span>
              <span>{account.amount}</span>
            </div>
          ))}
          <div className="total-assets">
            <span>Total Assets</span>
            <span id='EqualityBold'>{totalAssets}</span>
          </div>
        </div>
        <div className="column">
          <h3>Liabilities</h3>
          {liabilitiesData.map((account, index) => (
            <div key={index}>
              <span>{account.accountName}</span>
              <span>{account.amount}</span>
            </div>
          ))}
          <div className="total-liabilities">
            <span>Total Liabilities</span>
            <span>{totalLiabilities}</span>
          </div>
          <div className="owner-equity">
            <span>Owner's Equity</span>
            <span id='oe'>{ownerEquity}</span>
          </div>
          <div className='Sum'>
            <span>Liabilities + OE = </span> &nbsp;&nbsp;
            <span id='EqualityBold'>{CheckEquality}</span>
          </div>
        </div>
      </div>
      <div className="section">
      <div className={`balance-equality ${isBalanceEqual ? 'balanced' : 'unbalanced'}`}>
          {isBalanceEqual ? 'Assets and Liabilities/Owner\'s Equity are balanced' : 'Assets and Liabilities/Owner\'s Equity are not balanced'}
        </div>
      </div>
    </div>
  );
};

export default Balance;
