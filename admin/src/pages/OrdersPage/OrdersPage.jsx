import React, { useEffect, useState } from 'react'
import { getAllOrders, updateOrderStatus } from '../../services/orderService';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getAllOrders();

      if (Array.isArray(data)) {
        setOrders(data);
      } else  {
        console.log(data);
        setOrders([]);
      }
    } catch (error) {
      console.log(error);
      setOrders([]);
    }
  };

  const handleStatusChange = async (orderId, status) => {
    try {
      await updateOrderStatus(orderId, status);
      fetchOrders();
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
          <select
            value={order.status}
            onChange={(e) => 
              handleStatusChange(order._id, e.target.value)
            }
          >
            <option value="Pending">Pending</option>
            <option value="Preparing">Preparing</option>
            <option value="Out for Delevery">Out for Delevery</option>
            <option value="Delivered">Delivered</option>
          </select>

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