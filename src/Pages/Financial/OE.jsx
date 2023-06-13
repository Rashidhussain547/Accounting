import React,{useState,useEffect} from 'react';
import './Financial.css'
import { getOwnerEquity } from '../../redux/actions/ownerEquity.action';
import { useDispatch,useSelector } from 'react-redux';

const OE = () => {
  // Predefined data
  const dispatch = useDispatch()
  let totalEquity=0
  const { ownerEquity } = useSelector((state) => {
    return state;
  });
  const[loading,setLoading] = useState(false)
  console.log(ownerEquity)
  useEffect(()=>{
    setLoading(true)
    dispatch(getOwnerEquity()).then((res) => {
      if (res?.payload?.success) {
        
      } else {
      }
      setLoading(false)
    })
    
  },[])
  for(var i=0;i<ownerEquity?.payload?.[0]?.equity_account?.length;i++){
    if(ownerEquity?.payload?.[0]?.equity_account[i].credit==0){
      totalEquity-=ownerEquity?.payload?.[0]?.equity_account[i].debit
    }else{
      totalEquity+=ownerEquity?.payload?.[0]?.equity_account[i].credit
    }
  }
  // Calculate the sum of account amounts
  const sumOfAccounts = ownerEquity?.payload?.[0]?.equity_account?.reduce((sum, account) => sum + account.credit - account.debit, 0);

  // Predefined data for withdrawals and losses
  const withdrawalsAndLosses = [
    { accountName: 'Withdrawals', amount: 50 },
    { accountName: 'Losses during period', amount: 30 },
  ];

  // Calculate the sum of withdrawals and losses
  const sumOfWithdrawalsAndLosses = ownerEquity?.payload?.[0]?.equity_account?.reduce((sum, account) => sum + account.credit -account.debit, 0);

  // Calculate the owner's equity


  return (
    <div className="owner-equity-statement">
      <h2>Owner's Equity Statement</h2>
      <div className="column-container">
        <div className="column">
          <h3>Accounts</h3>
          {ownerEquity?.payload?.[0]?.equity_account?.map((account, index) => (
            <div key={index}>
              <span>{account.account_name}</span>
               <span>{account?.credit-account?.debit }</span>
            </div>
          ))}
          <div className="total-accounts">
            <span>Total</span>
            <span>{sumOfAccounts}</span>
          </div>
        </div>
        <div className="column">
          <h3>Withdraws and Losses</h3>
          {/* {withdrawalsAndLosses.map((account, index) => (
            <div key={index}>
              <span>{account.accountName}</span>
              <span>{account.amount}</span>
            </div>
          ))} */}
          <div className="total-withdrawals-losses">
            {/* <span>Total</span>
            <span>{sumOfWithdrawalsAndLosses}</span> */}
          </div>
        </div>
      </div>
      <div className="owner-equity">
        <span>Owner's total Equity</span>
        <span>{totalEquity}</span>
      </div>
    </div>
  );
};

export default OE;
