import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";
import Admincr from "./Pages/Admincr";
import Clientcr from "./Pages/Clientcr";
import Adminst from "./Pages/Adminst";

export default function Pages() {
  return (
    <>
      <Routes>
       <Route path="/adminst" element={<Adminst />} />
        <Route path="/admincr" element={<Admincr />} />
        <Route path="/clientcr" element={<Clientcr />} />
        <Route path="/" element={<Navigate to={"/clientcr"} />} />
      </Routes>
    </>
  );
}
