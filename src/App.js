import { Routes, Route } from "react-router-dom";
import React from 'react';
import ScrollToTop from "./components/ScrollToTop";
import Footer from './components/Footer';
import PostsPage from "./pages/PostsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import EasterEggPage from "./pages/EasterEggPage";
import ContactPage from "./pages/ContactPage";
import {Nav} from "./components/Nav";
import { Navigate } from "react-router-dom";
import "./index.css";



    
function App() {
  
    return (
      <>
       
        {/* <div class="loader">
          <img src="/assets/logo.png" alt="logo loader"></img>
        </div> */}
        <ScrollToTop/>
        <Nav />
        <Routes>

            
            <Route path="/home" element={<AboutPage />} />
            <Route path="/work" element={<PostsPage />} />
            <Route path="/work/:slug" element={<PostPage />} />
            <Route path="/wip" element={<ProjectsPage />} />
            <Route path="/wip/:slug" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/home"/>} />
            <Route path="/easteregg" element={<EasterEggPage/>}/>

        </Routes>
        

        <div className="footer">
        <Footer/>


        </div>
        
        
      </>
    );
}

export default App;

