import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  // Calculate subtotal for an item
  const getSubtotal = (item) => {
    return (parseFloat(item.price) * item.quantity).toFixed(2);
  };

  // Calculate total for all items
  const getTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(getSubtotal(item)), 0).toFixed(2);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <img src={item.img} alt="" />
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${getSubtotal(item)}</p>
              <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
              <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          ))}
          <h3>Total: ${getTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;