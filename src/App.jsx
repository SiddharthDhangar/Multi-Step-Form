import React from "react";
import Name from "./components/Name";
import Email from "./components/Email";
import Dob from "./components/DOB";
import Password from "./components/Password";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthDetails from "./components/AuthDetails";

const App = () => {
  return (
    <div className="w-full h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Name />}></Route>
        <Route path="/email" element={<Email />}></Route>
        <Route path="/dob" element={<Dob />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/authDetails" element={<AuthDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
