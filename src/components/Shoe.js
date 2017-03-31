import React from 'react';

const Shoe = (props) => (
  <div className='card'>
    <div className='container'>
      <p>{props.brand} > {props.name}</p>
      <p>{props.price.toFixed(2)}</p>
      <a onClick={() => props.onShoeSelect(props)}>Add to Cart</a>
    </div>
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;