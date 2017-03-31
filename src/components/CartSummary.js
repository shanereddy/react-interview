import React from 'react';

const TotalCost = (cart) => {
  return cart.reduce((sum, item) => {return sum + item.price;}, 0).toFixed(2);
}

const CartSummary = (props) => {
  return (
    <div className="CartSummary card">
      <div className="container">
        <h5>CartSummary</h5>
        Total Items:
        <span id='ItemCount'>{props.cart.length}</span>
        Total Cost
        <span id='TotalCost'>{ TotalCost(props.cart) }</span>
      </div>
    </div>
  )
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;