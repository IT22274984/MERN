import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Card from "./Card";
import PaymentShow from "./Payment/PaymentShow";
import Paytable from "./Payment/Paytable";
//import Home from "./Home/Home";
import Eticket from "./Pages/Eticket";
import NotFound from "./Pages/404";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home"
import CardsList from './components/CardList';
import AddAppoinment from './components/AddAppoinment';
import AllAppoinments from './components/AllAppoinments';
import ViewReport from './components/ViewReport';
import UpdateAppoinment from './components/UpdateAppoinment';

export default function Pages() {

  return (
    <Router>
      <Routes>
        <Route path="/eticket" element={<Eticket />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route exact path="/card" element={<Card></Card>} />
        <Route path="/cards-list" element={<CardsList />} />
        <Route path="/payment" element={<PaymentShow />} />
        <Route path="/AllPay" element={<Paytable />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appoinments" element={<AllAppoinments />} />
        <Route path="/addAppointment" element={<AddAppoinment />} />
        <Route path="/update-appoinment" element={<UpdateAppoinment />} />
        <Route path="/view-report" element={<ViewReport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
