import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import C_Header from "./components/C_Header";
//import Home from "./components/Home";
import AddOptical from "./components/AddOptical";
import Opticals from "./components/Opticals";
import About from "./components/About";
import OpticalDetail from "./components/OpticalDetail";
import Data from "./components/Data";
import Login from "./components/Login";
import C_Home from "./components/C_Home";
import View from "./components/View";
import Sunglasses from "./components/Sunglasses";
import Accessories from "./components/Accessories";
import SportsVision from "./components/SportsVision";
import Spectacles from "./components/Spectacles";
import ContactLenses from "./components/ContactLenses";
import GiftVouchers from "./components/GiftVouchers";
import More from "./components/More";
import C_About from "./components/C_About";
import QRScanner from "./components/QRScanner";
import { BrowserRouter as Router } from "react-router-dom";
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
  const [favorites, setFavorites] = useState([]); // State for favorites
  // const location = useLocation();

  // // Determine which header to show based on the current path
  // const showCHeader = location.pathname.startsWith("/client");
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
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddOptical />} exact />
        <Route path="/opticals" element={<Opticals />} exact />
        <Route path="/about/:id" element={<About favorites={favorites} />} exact />
        <Route path="/opticals/:id" element={<OpticalDetail />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/list" element={<Data />} exact />
        <Route path="/client" element={<C_Home />} exact />
        <Route path="/about/:id" element={<C_About favorites={favorites} />} exact />
        <Route path="/view" element={<View />} exact />
        <Route path="/more" element={<More />} exact />
        <Route path="/sun" element={<Sunglasses favorites={favorites} setFavorites={setFavorites} />} exact />
        <Route path="/sport" element={<SportsVision favorites={favorites} setFavorites={setFavorites} />} exact />
        <Route path="/accessories" element={<Accessories favorites={favorites} setFavorites={setFavorites} />} exact />
        <Route path="/contact" element={<ContactLenses favorites={favorites} setFavorites={setFavorites} />} exact />
        <Route path="/gift" element={<GiftVouchers favorites={favorites} setFavorites={setFavorites} />} exact />
        <Route path="/spectacles" element={<Spectacles favorites={favorites} setFavorites={setFavorites} />} exact />
        <Route path="/QR" element={<QRScanner />} exact />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}
