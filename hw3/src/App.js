import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CountryList from './CountryList';

export default function App() {
  return 
     (
      
      <Router>
        <div>
          {/* Navbar */}
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/list">Country List</Link>
              </li>
            </ul>
          </nav>
  
          {/* Route definitions */}
          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/list" element={<CountryList />} />
            </Routes>
          </Router>
        </div>
      </Router>
    );
}
