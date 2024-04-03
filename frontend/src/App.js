// App.js
import Header from "./component/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AddPrescription from "./component/AddPrescription";
import Prescriptions from "./component/Prescription/Prescriptions";
import About from "./component/About";
import PrescriptionDetail from "./component/Prescription/PrescriptionDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddPrescription />} exact />
          <Route path="/prescriptions" element={<Prescriptions />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/prescriptions/:id" element={<PrescriptionDetail />} exact /> 
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

/* <Route path="" element={<Home />} exact />
          <Route path="" element={<AddBook />} exact />
          <Route path="" element={<Books />} exact />
          <Route path="" element={<About />} exact />
          <Route path="" element={<BookDetail />} exact /> */