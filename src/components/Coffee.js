import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h1>Paisa Coffee Inventory Manager</h1>
        <h3>Name of Coffee: {props.name}</h3>
        <h3>Origin of Coffee: {props.origin}</h3>
        <h3>Roast Type: {props.roast}</h3>
        <h3>Price per Pound: ${props.price}</h3>
        <h3>Number of Pounds Left in Current Sack: {props.beansLeft}</h3>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  beansLeft: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;