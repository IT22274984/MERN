import { Route, Routes, Navigate } from "react-router-dom";
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
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Eticket from "./Pages/Eticket";
import NotFound from "./Pages/404";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home"
import OpCdetail from "./components/Op,Cdetail/OpCdetail"

export default function Pages() {

	const user = localStorage.getItem("token");
	const customer = localStorage.getItem("token");

	return (
		<Router>
			<Routes>
				<Route path="/eticket" element={<Eticket />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				{user && <Route path="/OptometristHome" exact element={<OMain />} />}
				<Route path="/Osignup" exact element={<OSignup />} />
				<Route path="/Ologin" exact element={<OLogin />} />
				<Route path="/OptometristHome" element={<Navigate replace to="/Ologin" />} />
				{customer && <Route path="/CustomerHome" exact element={<CMain />} />}
				<Route path="/Csignup" exact element={<CSignup />} />
				<Route path="/Clogin" exact element={<CLogin />} />
				<Route path="/CustomerHome" element={<Navigate replace to="/Clogin" />} />
				<Route path="/add" element={<AddPrescription />} />
				<Route path="/prescriptions" element={<Prescriptions />} exact />
				<Route path="/prescriptions/:id" element={<PrescriptionDetail />} exact />
				<Route path="/Cprescriptions" element={<CPrescriptions />} exact />
				<Route path="/OpCdetail" element={<OpCdetail />} exact />

			</Routes>
		</Router>
	);
}
