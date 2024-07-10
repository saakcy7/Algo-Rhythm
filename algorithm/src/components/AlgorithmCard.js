import React from "react";
import '../styles/AlgorithmCard.css';

const AlgorithmCard = ({ name,description,image }) => {
return(
    <div className="algorithm-card">
        <img src={image} alt={`${name}`} className="algorithm-image" />
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
)
}
export default AlgorithmCard;