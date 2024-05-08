//C:\Users\shant\OneDrive\Desktop\sample\frontend\src\Pages.js
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


function App() {
	const user = localStorage.getItem("token");
	const customer = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<OMain />} />}
			<Route path="/Osignup" exact element={<OSignup />} />
			<Route path="/Ologin" exact element={<OLogin />} />
			<Route path="/" element={<Navigate replace to="/Ologin" />} />
			{customer && <Route path="/CustomerHome" exact element={<CMain />} />}
			<Route path="/Csignup" exact element={<CSignup />} />
			<Route path="/Clogin" exact element={<CLogin />} />
			<Route path="/CustomerHome" element={<Navigate replace to="/Clogin" />} />
			<Route path="/add" element={<AddPrescription />} />
			<Route path="/prescriptions" element={<Prescriptions />} exact />
			<Route path="/prescriptions/:id" element={<PrescriptionDetail />} exact /> 
			<Route path="/Cprescriptions" element={<CPrescriptions />} exact />

		</Routes>

		
	);
}

export default App;
