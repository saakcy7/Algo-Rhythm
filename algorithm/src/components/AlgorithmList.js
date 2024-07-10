import React from "react";
import '../styles/AlgorithmList.css';
import AlgorithmCard from './AlgorithmCard';
const AlgorithmList = ({ algorithms }) => {
return(
    <div className="algorithm-list">
        {algorithms.map((algorithm, index) => (
            <AlgorithmCard key={index} name={algorithm.name} description={algorithm.description} image={algorithm.image} link={algorithm.link}/>
        ))}
    </div>
)
}
export default AlgorithmList;
