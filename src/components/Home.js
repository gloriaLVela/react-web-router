import React, { Component } from 'react';
import Card from './Card';

// Change it to a stateless component .
// The component is going to use the data provided by the App component

const Home = (props) => {
  return (
    <div className="Grid animated bounceInUp">
      {
        props.cards.map((card) => (
          <Card 
            duration={150} 
            key={card.id} 
            card={card} 
          />
        ))
      }
    </div>
  )
}
 
export default Home;
