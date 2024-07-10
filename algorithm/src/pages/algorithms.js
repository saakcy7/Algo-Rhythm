import React from "react";
import AlgorithmList from '../components/AlgorithmList';
import { algorithms } from '../data';
const Algorithms = () => {
    return (
        <div>
            <h1>Popular Algorithms</h1>
            <AlgorithmList algorithms={algorithms} />
        </div>
    );
}
export default Algorithms;