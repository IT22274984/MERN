import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddAppoinment from './components/AddAppoinment';
import AllAppoinments from './components/AllAppoinments';
import ViewReport from './components/ViewReport';
import Home from './components/Home';
// import Header from './components/Header';

import UpdateAppoinment from './components/UpdateAppoinment';
import NavBar from './components/NavBar';


function Pages() {
  return (
    <Router>
      <div>
        {/* <Header/> */}
        {<NavBar/>}
        <Routes>
          <Route path="/appoinments" element={<AllAppoinments/>}/>
          <Route path="/add-appoinment" element={<AddAppoinment/>}/>
          <Route path="/update-appoinment" element={<UpdateAppoinment/>}/>
          <Route path="/view-report" element={<ViewReport/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
} 

export default Pages;

