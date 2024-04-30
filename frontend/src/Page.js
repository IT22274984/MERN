// index.js or App.js (where you define your routes)
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import TasksList from "./components/TasksList";
import { Route, Routes } from "react-router";
import Card from "./Card";
import PaymentShow from "./Payment/PaymentShow";
import Formtable from "./Formtable/Formtable";
import Paytable from "./Payment/Paytable";
import Home from "./Home/Home";

export default function Page() {
  return (
    <Router>
      <Routes>
        <Route exact path="/card" element={<Card></Card>} />
        <Route path="/cards-list" element={<TasksList></TasksList>} />
        <Route path="/payment" element={<PaymentShow/>} />
        <Route path="/" element={<Formtable />} /> {/* Add this line */}
        <Route path="/AllPay" element={<Paytable />} /> 
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </Router>
  )
}



//----------------------------------------------------
// App.js
// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import AddTask from "./components/AddTask";
// import TasksList from "./components/TasksList";
// import Container from "react-bootstrap/Container";
// import { Row, Col } from "react-bootstrap";

// function App() {
//   return (
//     <Container>
//       <Navbar />
//       <div className="justify-content-md-center">
//         <Row>
//           <Col lg="6">
//             <AddTask />
//             <a to="/tasks-list">
//               <button>Go to cards List</button>
//             </a>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }

// export default App;
