import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slice/cartSlice';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className='container mt-3'>
      <h2 className='cartHead'>Cart Items</h2>
      <div className="row mt-3">
      {cartItems.map(item => (

        <div key={item.id} className="col-12 boxCart">
          <p>{item.title} </p>
          <p>Rs. {item.price}</p>
          <p> x {item.quantity}</p>
          <button className='btn btn-primary' onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>

      ))}
      </div>
    </div>
  );
}
