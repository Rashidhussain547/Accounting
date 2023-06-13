import './App.css';
// import { BrowserRouter as Router , Route,Routes, } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
// import SideBar from './Components/SideBar/SideBar'
import Journal from './Pages/Journal';
import Trail from './Pages/Trail';
import Income from './Pages/Financial/Icome';
import OE from './Pages/Financial/OE';
import Balance from './Pages/Financial/Balance';

function App() {
  return (
   <>
    <Navbar />
    {/* <SideBar/> */}
    <BrowserRouter>
          <Routes>
            <Route exact={true} path="/" element={<Journal />} />
            <Route  path="/Trail" element={<Trail />} />
            <Route  path="/Income" element={<Income />} />
            <Route  path="/OE" element={<OE />} />
            <Route  path="/Balance" element={<Balance />} />
          </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
