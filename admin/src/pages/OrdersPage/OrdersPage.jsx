import React, { useEffect, useState } from 'react'
import { getAllOrders } from '../../services/orderService';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getAllOrders();

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='orders-page'>
      <h1>Orders Management</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className='order-card'
        >
          <h3>Order Id</h3>

          <p>{order._id}</p>

          <h4>Address</h4>

          <p>{order.address}</p>

          <h4>Total</h4>

          <p>₹{order.totalAmount}</p>

          <h4>Status</h4>

          <p>{order.status}</p>

          <h4>Items</h4>

          <ul>
            {order.items.map((item) => (
              <li key={item._id}>
                {item.foodId
                  ? `${item.foodId.title} × ${item.quantity}`
                  : `Food Deleted × ${item.quantity}`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default OrdersPage;