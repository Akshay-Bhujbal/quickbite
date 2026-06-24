import { useEffect, useState} from 'react'
import {
   getCart,
   updateCartQuantity,
   removeCartItem,
  } from '../../services/cartService';

import { placeOrder } from '../../services/orderService';

import "./CartPage.css"

function CartPage() {
  const [cart, setCart] = useState(null) 

  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();

      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = async (foodId, quantity) => {
    if (quantity < 1) return;

    try{
      await updateCartQuantity(foodId, quantity);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };


  const handleRemove = async (foodId) => {
    try {
      await removeCartItem(foodId);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };


  const handlePlaceOrder = async () => {
    try {
      const totalAmount = cart.items.reduce(
        ( total, item) => 
          total + item.foodId.price * item.quantity, 0
      );

      const response = await placeOrder({address, totalAmount,});

      alert(response.message);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='cart-page'>
      <h1>Cart</h1>
      <div className='cart-item-card'>
        {cart &&
        cart.items &&
        cart.items.map((item) => (
          <div className='cart-item' key={item._id}>

            <h3>{item.foodId.title}</h3>

            <p>Quantity: {item.quantity}</p>

            <div className='cart-buttons'>
              <button 
                onClick={ () => handleQuantityChange(
                  item.foodId._id,
                  item.quantity - 1
                  )
                }
              >
                -
              </button>

              <button 
                onClick={ () => handleQuantityChange(
                  item.foodId._id,
                  item.quantity + 1
                  )
                }
              >
                +
              </button>

              <button
                onClick={ () => handleRemove(
                  item.foodId._id
                )}
              >
                Remove
              </button>
            </div>

            <h2>
              Total: ₹{cart?.items?.reduce(
                (total, item) => 
                  total + item.foodId.price * item.quantity, 0
              )}
            </h2>
            
            <input
              type="text" 
              placeholder='Enter Address'
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            />

            <button
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>

          </div>
          ))}
      </div>
      
    </div>
    
  )
}

export default CartPage