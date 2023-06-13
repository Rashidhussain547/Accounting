import React,{useState,useEffect} from 'react';
import './Financial.css'
import { getIncomeStatement } from '../../redux/actions/incomeStatement.action';
import { useDispatch,useSelector } from 'react-redux';
import { Bars } from 'react-loader-spinner';

const Income= () => {
  // DATA
  const dispatch = useDispatch()
  const { income } = useSelector((state) => {
    return state;
  });
  console.log(income)
  const[loading,setLoading] = useState(false)
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
  useEffect(()=>{
    setLoading(true)
    dispatch(getIncomeStatement()).then((res) => {
      if (res.payload.success) {
      } else {
      }
      setLoading(false)
    })
  },[])
  // Calculate total revenue and total expense
  const totalRevenue = income?.payload?.[0]?.rev_arr.reduce((sum, revenue) => sum + revenue.amount, 0);
  const totalExpense = income?.payload?.[0]?.exp_arr.reduce((sum, expense) => sum + expense.amount, 0);

  // Calculate net income
  const netIncome = totalRevenue - totalExpense;

  return (
    <div className="income-statement">
      <h2>Income Statement</h2>
      {!loading  ?   <div>
        <h3>Revenues</h3>
     <table>
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Amount</th>
            </tr>
          </thead>
        <tbody>
            {income?.payload?.[0]?.rev_arr?.map((revenue, index) => (
              <tr key={index}>
                <td>{revenue.name}</td>
                <td>{revenue.amount}</td>
              </tr>
            ))}
          </tbody>:
          
          <tfoot>
            <tr>
              <td>Total Revenues:</td>
              <td>{totalRevenue}</td>
            </tr>
          </tfoot>
        </table>
      </div>: <div style={{display:"flex",justifyContent:"center"}}>
          <Bars   height="80"
        width="80"
        color="gray"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true} /></div> }
     {!loading ? <div>
        <h3>Expenses</h3>
        <table>
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {income?.payload?.[0]?.exp_arr?.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
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
      </div>: <div style={{display:"flex",justifyContent:"center"}}>
          <Bars   height="80"
        width="80"
        color="gray"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true} /></div>}
      <div>
        <h3>Net Income</h3>
        <div>{netIncome}</div>
      </div>
    </div>
  );
};

export default Income;
