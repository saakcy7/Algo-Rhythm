import React from "react";
import AlgorithmList from '../components/AlgorithmList';
import { algorithms } from '../data';
import Navbar from '../components/Navbar';
const Algorithms = () => {
    return (
        <div>
            <Navbar/>
            <h1>Popular Algorithms</h1>
            <AlgorithmList algorithms={algorithms} />
        </div>
    );
}
export default Algorithms;