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

export default function Pages() {
  
  return (
    <Router>
      <Routes>
        <Route path="/eticket" element={<Eticket />}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/card" element={<Card></Card>} />
        <Route path="/cards-list" element={<CardsList/>} />
        <Route path="/payment" element={<PaymentShow/>} />
        <Route path="/AllPay" element={<Paytable />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}
