import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

// The most important aspect of routing is when you need to have dynamic routes and pass specific props related to this route.
// For example, we click on any of those cards we would want to get to the actual page for that product.

const Card = (props) =>  (
  <div className={props.card.animation}>
    <Link to={`/product/${props.card.id}`}>
      <div className="front">
        <img src="juice.jpg" alt="Avatar" className="card-image" />
        <div className="container">
          <h3>{props.card.title}</h3>
          <h3><span className="price"> ${props.card.price}</span></h3> 
          <p>{props.card.description}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
