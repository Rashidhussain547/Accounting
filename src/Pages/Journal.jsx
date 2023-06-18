import React, { useState } from 'react';
import './Journal.css'
import { addJournalEntry } from '../redux/actions/journal.action';
import { useSelector,useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from 'react-loader-spinner';

const Journal = () => {
  const [debit, setDebit] = useState({ account: '', account_type: '', amount: Number()});
  const [credit, setCredit] = useState({ account: '', account_type: '', amount: Number() });
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(false)

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
    // setLoading(true)
    // console.log({
    //   debit,
    //   credit
    // })
    // dispatch(addJournalEntry({
    //   debit,
    //   credit,
    //   statement:description
    // })).then((res) => {
    //   console.log(res)
    //   if (res.payload.success) {
    //     toast.success("Entry added successfully.", {
    //       position: toast.POSITION.TOP_RIGHT
    //   })
    //   } else {
    //     toast.error('An error occured!', {
    //       position: toast.POSITION.TOP_RIGHT
    //   });
    //   }
    //   setLoading(false)
    // })

    console.log('Debit:', debit);
    console.log('Credit:', credit);    
    console.log('Description:', description);
    // Reset the form
    setDebit({ account: '', account_type: '', amount: 0 });
    setCredit({ account: '', account_type: '', amount: 0 });
    setDescription('');
  };

  return (
    <div className="journal-form">
      <h2>Journal Entries </h2>
    {!loading ? <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-column">
            <h3>Debit</h3>
            <div className="form-group">
              <label htmlFor="debitAccountName">Account Name</label>
              <input
                type="text"
                id="debitAccountName"
                name="account"
                value={debit.account}
                onChange={handleDebitChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="debitAccountType">Account Type</label>
              <select  onChange={handleDebitChange} name="account_type" value={debit.account_type} style={{width:"106%",padding:"8px",border:"1px solid #ccc",borderRadius:"5px"}}>
                <option value=""></option>
                <option value="owner equity">Owner Equity</option>
                <option value="asset">Asset</option>
                <option value="liability">Liability</option>
              </select>
              {/* <input
                type="text"
                id="debitAccountType"
                name="account_type"
                value={debit.account_type}
                onChange={handleDebitChange}
              /> */}
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
                name="account"
                value={credit.account}
                onChange={handleCreditChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="creditAccountType">Account Type</label>
              <select placeholder='Select acount type' value={credit.account_type} name='account_type' onChange={handleCreditChange} style={{width:"106%",padding:"8px",border:"1px solid #ccc",borderRadius:"5px"}}>
              <option value=""></option>               
                <option value="owner equity">Owner Equity</option>
                <option value="asset">Asset</option>
                <option value="liability">Liability</option>
              </select>
              {/* <input
                type="text"
                id="creditAccountType"
                name="account_type"
                value={credit.account_type}
                onChange={handleCreditChange}
              /> */}
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
      </form>:
      <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
      <Circles
      height="80"
      width="80"
      color="gray"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div>
      }
      <ToastContainer  hideProgressBar={true} autoClose={2500}/>
    </div>
  );
};

export default Journal;
