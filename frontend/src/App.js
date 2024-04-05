import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddOptical from "./components/AddOptical";
import Opticals from "./components/Opticals";
import About from "./components/About";
import OpticalDetail from "./components/OpticalDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddOptical />} exact />
          <Route path="/opticals" element={<Opticals />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/opticals/:id" element={<OpticalDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
