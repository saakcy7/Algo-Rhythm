// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Route,Router } from 'react-router-dom';
import Home from '../src/pages/home';
import About from '../src/pages/about';
import Algorithms from '../src/pages/algorithms';
const App = () => {
    return (
        <div className="App">
          <Navbar/>
            <header className="App-header">
                <h1>DSA Popular Algorithms</h1>
            </header>
            <Router>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/algorithms" component={Algorithms} />
                    </Router>    
              
        </div>
    );
};

export default App;
