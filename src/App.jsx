import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from "./Components/NavBar";
import Citypackage from "./Components/Citypackage.jsx";
import Packagedetails from "./pages/detailspage.jsx";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Home from "./pages/home";
import Recommendation from "./Components/Recommendation";
import Classes from "./Styles/Footer.module.css";


function App() {
  return (
    <Router>
      <div className={Classes.app}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citypackage" element={<Citypackage />} />
          <Route path="/packagedetails" element={<Packagedetails />} />
         
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
