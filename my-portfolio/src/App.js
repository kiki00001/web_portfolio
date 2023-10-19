import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Blog from './components/Blog';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>   
      <Navbar />
        <Router>       
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>      
      </Router>  
    </> 
  );
}
export default App;
