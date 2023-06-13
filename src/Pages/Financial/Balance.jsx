import React,{useState,useEffect} from 'react';
import './Financial.css'
import { getBalanceSheet } from '../../redux/actions/balanceSheet.action';
import { useDispatch,useSelector } from 'react-redux';


const Balance= () => {
  // Predefined data for assets
  const dispatch = useDispatch()
  const[loading,setLoading] = useState(false)

  const { balance } = useSelector((state) => {
    return state;
  });
  console.log(balance)
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
  useEffect(()=>{
    setLoading(true)
    dispatch(getBalanceSheet()).then((res) => {
      if (res?.payload?.success) {
        
      } else {
      }
      setLoading(false)
    })
    
  },[])

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
          {balance?.payload?.[0]?.asset_array.map((account, index) => (
            <div key={index}>
              <span>{account.name}</span>
              <span>{account?.credit ? account?.credit:account?.debit}</span>
            </div>
          ))}
          <div className="total-assets">
            <span>Total Assets</span>
            <span id='EqualityBold'>{balance?.payload?.[0]?.asset}</span>
          </div>
        </div>
        <div className="column">
          <h3>Liabilities</h3>
          {balance?.payload?.[0]?.liab_array.map((account, index) => (
            <div key={index}>
              <span>{account.name}</span>
              <span>{account?.credit ? account?.credit:account?.debit}</span>
            </div>
          ))}
          <div className="total-liabilities">
            <span>Total Liabilities</span>
            <span>{balance?.payload?.[0]?.liab}</span>
          </div>
          <h3>Owner Equity</h3>
          {balance?.payload?.[0]?.equit_array.map((account, index) => (
            <div key={index}>
              <span>{account.name}</span>
              <span>{account?.credit ? account?.credit:account?.debit}</span>
            </div>
          ))}
          <div className="total-liabilities">
            <span>Total Owner Equity</span>
            <span>{balance?.payload?.[0]?.equi}</span>
          </div>
          <div className="owner-equity">
            <span>Liabilities & Owner's Equity</span>
          </div>
          <div className='Sum'>
            <span>Liabilities + OE = </span> &nbsp;&nbsp;
            <span id='EqualityBold'>{balance?.payload?.[0]?.liab + balance?.payload?.[0]?.equi}</span>
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
