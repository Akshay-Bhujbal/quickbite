import { useEffect, useState} from 'react'
import { getCart } from '../../services/cartService';

function CartPage() {
  const [cart, setCart] = useState(null) 

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

  return (
    <div>
      <h1>Cart</h1>

      {cart &&
        cart.items &&
        cart.items.map((item) => (
          <div key={item._id}>
            <h3>{item.foodId.title}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>
          ))}
    </div>
  )
}

export default CartPage