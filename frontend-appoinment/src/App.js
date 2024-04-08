import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddAppoinment from './components/AddAppoinment';
import AllAppoinments from './components/AllAppoinments';
// import Header from './components/Header';

import UpdateAppoinment from './components/UpdateAppoinment';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <div>
        {/* <Header/> */}
        {<NavBar/>}
        <Routes>
          <Route path="/appoinments" element={<AllAppoinments/>}/>
          <Route path="/add-appoinment" element={<AddAppoinment/>}/>
          <Route path="/update-appoinment" element={<UpdateAppoinment/>}/>
        </Routes>
      </div>
    </Router>
  );
} 

export default App;
