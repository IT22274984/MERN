import './App.css';
import React, { useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// import Header from "./components/Header";
import C_Header from "./components/C_Header";
//import Home from "./components/Home";
import AddOptical from "./components/AddOptical";
import Opticals from "./components/Opticals";
// import About from "./components/About";
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
import AddAppoinment from './components/AddAppoinment';
import AllAppoinments from './components/AllAppoinments';
import ViewReport from './components/ViewReport';
import UpdateAppoinment from './components/UpdateAppoinment';
// hams
import About from "./Pages/About"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Profile from "./Pages/Profile"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
//mathu
import Admincr from "./Pages/Admincr";
import Clientcr from "./Pages/Clientcr";
import Adminst from "./Pages/Adminst";
//nava
import OMain from "./components/OMain";
import OSignup from "./components/OSingup";
import OLogin from "./components/OLogin";
import CMain from "./components/CMain";
import CSignup from "./components/CSingup";
import CLogin from "./components/CLogin";
import AddPrescription from "./components/AddPrescription/AddPrescription"
import Prescriptions from "./components/Prescription/Prescriptions";
import PrescriptionDetail from "./components/Prescription/PrescriptionDetail";
import CPrescriptions from "./components/Prescription/CPrescriptions";
import OpCdetail from "./components/Op,Cdetail/OpCdetail"

export default function Pages() {
  const [favorites, setFavorites] = useState([]); // State for favorites

  const user = localStorage.getItem("token");
  const customer = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/adminst" element={<Adminst />} />
          <Route path="/admincr" element={<Admincr />} />
          <Route path="/clientcr" element={<Clientcr />} />
          {/* <Route path="/" element={<Navigate to={"/clientcr"} />} /> */}
          <Route path="/eticket" element={<Eticket />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route exact path="/card" element={<Card></Card>} />
          <Route path="/appoinments" element={<AllAppoinments />} />
          <Route path="/addAppointment" element={<AddAppoinment />} />
          <Route path="/update-appoinment" element={<UpdateAppoinment />} />
          <Route path="/view-report" element={<ViewReport />} />
          <Route path="/cards-list" element={<CardsList />} />
          <Route path="/payment" element={<PaymentShow />} />
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
          {/* hams */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          {user && <Route path="/OptometristHome" exact element={<OMain />} />}
          <Route path="/Osignup" exact element={<OSignup />} />
          <Route path="/Ologin" exact element={<OLogin />} />
          <Route path="/OptometristHome" element={<Navigate replace to="/Ologin" />} />
          {customer && <Route path="/CustomerHome" exact element={<CMain />} />}
          <Route path="/Csignup" exact element={<CSignup />} />
          <Route path="/Clogin" exact element={<CLogin />} />
          <Route path="/CustomerHome" element={<Navigate replace to="/Clogin" />} />
          <Route path="/addprescription" element={<AddPrescription />} />
          <Route path="/prescriptions" element={<Prescriptions />} exact />
          <Route path="/prescriptions/:id" element={<PrescriptionDetail />} exact />
          <Route path="/Cprescriptions" element={<CPrescriptions />} exact />
          <Route path="/OpCdetail" element={<OpCdetail />} exact />
        </Routes>
      </Router>
    </>
  );
}
