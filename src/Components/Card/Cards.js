import React from 'react';
import './Card.css';

const Card = ({ title, image, inicio, fin }) => (
  <div className="card">
    <div className="card-content">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  </div>
);

export default Card;
