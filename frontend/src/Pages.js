import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
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
