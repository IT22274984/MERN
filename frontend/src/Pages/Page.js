import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";
import Admin from "./Admin";
import Client from "./Client";


export default function Pages() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/client" element={<Client />} />
        <Route path="/" element={<Navigate to={"/client"} />} />
      </Routes>
    </>
  );
}
