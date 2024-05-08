import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";
import Admin from "./Pages/Admin";

export default function Pages() {
    return (
      <>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Navigate to={"/admin"} />} />
        </Routes>
      </>
    );
  }
  