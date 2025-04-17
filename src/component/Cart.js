import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity  } from '../redux/slice/cartSlice';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className='container mt-3'>
      <h2 className='cartHead'>Cart Items</h2>
      <div className="mt-3">
      {cartItems.map(item => (

        <div key={item.id} className="boxCart row">
          <div className='col-2'>
          <img className='cartImg' src={item.image} alt=""/> 
          </div>
          <div className='col-10'>
          <h4>{item.title} </h4>
          {/* <p>Rs. {item.price}</p> */}
          <p><strong>Price:</strong> <strong>Rs. {(item.price * item.quantity).toFixed(2)}</strong></p>
           <button className='cartButn'> <span className='cartIncrs' onClick={() => dispatch(decreaseQuantity(item.id))}>-</span> {item.quantity}<span className='cartDcrs' onClick={() => dispatch(increaseQuantity(item.id))}>+</span></button>
          <button className='btn btn-primary' onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>

      ))}
      </div>
    </div>
  );
}
