import React from "react";
import '../styles/AlgorithmCard.css';

const AlgorithmCard = ({ name,description,image,link }) => {
return(
    <div className="algorithm-card">
        <img src={image} alt={`${name}`} className="algorithm-image" />
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer">Know More About The Algorithm: Click here!</a>

    </div>
)
}
export default AlgorithmCard;