import React from 'react';
import './Card.css';

const Card = ({ title, image, inicio, fin }) => (
  <div className="card">
    <div className="card-content">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  <div className="card-info">
    <div className="card-info-content">
      <h4>Inicio</h4>
      <p>{inicio}</p>
    </div>
    <div className="card-info-content">
      <h4>Fin</h4>
      <p>{fin}</p>
    </div>
  </div>
  </div>
);

export default Card;
