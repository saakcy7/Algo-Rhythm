import React from "react";
import AlgorithmList from '../components/AlgorithmList';
import { algorithms } from '../data';
const Algorithms = () => {
    return (
        <div>
            <h1 style={{fontSize:'60px', fontWeight:'300'}}>Popular Algorithms</h1>
            <AlgorithmList algorithms={algorithms} />
        </div>
    );
}
export default Algorithms;