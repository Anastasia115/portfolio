import { Routes, Route } from "react-router-dom";
import React from 'react';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WipPage from "./pages/WipPage";
import ContactPage from "./pages/ContactPage";
import Nav from "./components/Nav";
import { Navigate } from "react-router-dom";
import "./index.css";


    
function App() {
    return (
      <>
        <Nav />
        <Routes>

            <Route path="/home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            
            <Route path="/wip" element={<WipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/home"/>} />

        </Routes>
        <div className="footer">
        <Footer/>

        </div>

        {/* <div className="apptry">
          <Projects/>
        </div> */}
        
      </>
    );
}

export default App;

