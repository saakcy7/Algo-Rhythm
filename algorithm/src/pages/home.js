// src/pages/Home.js
import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import algorithmImage from '../images/algorithm.png'; // Import the image

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to DSA Algorithms</h1>
                <p>Learn about the most popular Data Structures and Algorithms.</p>
            </header>
            <section className="home-overview">
                <h2>What You'll Learn</h2>
                <p>Explore the key algorithms and data structures that every programmer should know.</p>
                <img src={algorithmImage} alt="Algorithms" className="overview-image" />
                <ul>
                    <li>Binary Search</li>
                    <li>Merge Sort</li>
                    <li>Quick Sort</li>
                    <li>And many more...</li>
                </ul>
            </section>
            <section className="home-links">
                <h2>Get Started</h2>
                <Link to="/algorithms" className="home-link">View Algorithms</Link>
                <Link to="/about" className="home-link">Learn More About Us</Link>
            </section>
        </div>
    );
};

export default Home;
