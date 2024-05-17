// App.js
import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Home from './Home';
import CountryList from './CountryList';

// Navbar component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
        <a href="/CountryList">Country List</a>
        </li>
      </ul>
    </nav>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <div>
      <nav>
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
        <a href="/CountryList">Country List</a>
        </li>
      </ul>
      </nav>
        <Routes>
          <Route path="/Home"  component={Home} />
          <Route path="/CountryList" component={CountryList} />
        </Routes>
      </div>

    </Router>
  );
};

export default App;
