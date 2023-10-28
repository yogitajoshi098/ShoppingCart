import React, { useContext } from 'react';
import './Cart.css';
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './cart-item';
import { useNavigate } from 'react-router-dom';




function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItem'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}

      </div>
      <br></br>

      {
        totalAmount > 0 ?

          <div className='checkout'>


            <p>SubTotal: ${totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue shopping</button>
            <button>Checkout</button>
          </div>
          : <h1>Your Cart is empty</h1>}
    </div>
  )
}

export default Cart
