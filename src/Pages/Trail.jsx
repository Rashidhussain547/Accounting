import React, { useEffect, useState } from 'react';
import './Trail.css'
import { getTrialBalance } from '../redux/actions/trial.action';
import { useDispatch,useSelector } from 'react-redux';
import { Bars } from 'react-loader-spinner';


const Trail = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({
    accountName: '',
    debitBalance: 0,
    creditBalance: 0,
  });
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(false)
  const { trial } = useSelector((state) => {
    return state;
  });
useEffect(()=>{
  dispatch(getTrialBalance()).then((res) => {
    console.log(res)
    if (res.payload.success) {
    } else {
    }
    setLoading(false)
  })
},[])


  // Calculate the sum of debit and credit balances
  const totalDebit = accounts.reduce((sum, account) => sum + parseInt(account.debitBalance), 0);
  const totalCredit = accounts.reduce((sum, account) => sum + parseInt(account.creditBalance), 0);

  return (
    <div className='trail-balance'>
      <h2>Trail Balance</h2>
      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Debit Balance</th>
            <th>Credit Balance</th>
          </tr>
        </thead>
      { !loading ? <tbody>
          {trial?.payload?.[0]?.tAccounts.map((account, index) => (
            <tr key={account._id}>
              <td>{account.account_name}</td>
              <td>{account.debit}</td>
              <td>{account.credit}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{trial?.payload?.[0]?.total?.debit}</td>
            <td>{trial?.payload?.[0]?.total?.credit}</td>
          </tr>
        </tbody>:
        <Bars   height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true} />
        }
      </table>
    </div>
  );
};

export default Trail;
