import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getMyOrders } from '../../services/orderService';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, [])

  const fetchOrders = async () => {
    try {
      const data = await getMyOrders();

      console.log(data);

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>My Orders</h1>
      
      {orders.map((order) => (
        <div key={order._id}>

          <h3>Order Id: { order._id }</h3>
          
          <p>Status: { order.status }</p>

          <p>Total: ₹{ order.totalAmount }</p>

        </div>
      ))}
    </div>
  )
}

export default OrdersPage;