// src/pages/About.js
import React from 'react';
import '../styles/about.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Learn more about the team and mission behind DSA Algorithms.</p>
            </header>
            <section className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide comprehensive and easy-to-understand resources on data structures and algorithms for students, educators, and professionals.</p>
                </div>
                <div className="about-section">
                    <h2>Our Team</h2>
                    <p>We are a group of passionate developers and educators dedicated to making learning algorithms accessible to everyone. Our team includes experts in computer science, software engineering, and educational technology.</p>
                </div>
                <div className="about-section">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feedback, or suggestions, feel free to <a href="mailto:contact@dsa-algorithms.com">reach out to us</a>. We would love to hear from you!</p>
                </div>
            </section>
            <section className="home-links">
                <h2>To Know More</h2>
                <Link to="/algorithms" className="home-link">View Algorithms</Link>
                <Link to="/about" className="home-link">Learn More About Us</Link>
            </section>
        </div>
    );
};

export default About;
