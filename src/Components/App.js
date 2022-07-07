import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
