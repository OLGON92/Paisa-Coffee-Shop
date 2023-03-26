import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Sack Details</h1>
      <h3>Name of Coffee: {props.name}</h3>
      <h3>Origin of Coffee: {props.origin}</h3>
      <h3>Roast Type: {props.roast}</h3>
      <h3>Price per Pound: ${props.price}</h3>
      <h3>Number of Pounds Left in Current Sack: {props.beansLeft}</h3>
      <button onClick={ props.onClickingEdit }>Edit Sack?</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Sack?</button>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default CoffeeDetail;