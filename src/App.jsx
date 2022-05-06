import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddPatient from "./Components/Patient/AddPatient";
import AdminVaccinations from "./Components/AdminVaccinations/AdminVaccinations"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/AdminVaccinations" element={<AdminVaccinations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
