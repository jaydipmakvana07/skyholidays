import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Citypackage from "./Components/Citypackage.jsx";
import Packagedetails from "./pages/detailspage.jsx";
import Home from "./pages/home";
import Admin from "./admin/component/admin.jsx";
import Classes from "./Styles/Footer.module.css";

function App() {
  return (
    <Router>
      <div className={Classes.app}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citypackage/:title" element={<Citypackage />} />
          <Route path="/packagedetails/:sub_package_id" element={<Packagedetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
