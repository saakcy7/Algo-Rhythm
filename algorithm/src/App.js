// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Home from '../src/pages/home';
import About from '../src/pages/about';
import Algorithms from '../src/pages/algorithms';
const App = () => {
    return (
      <Router>
        <div className="App">
          <Navbar/>
            <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/algorithms" element={<Algorithms/>} />
            </Routes>    
              
        </div>
        </Router>
    );
};

export default App;
