// Supplier panel. Show incoming requests from chemists, supply stock, and delivery status. Include action buttons for fulfillment.


import React, { useEffect, useState } from 'react';

const SupplierDashboard = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Get user info from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }

    // Mock orders data - replace with API call if needed
    setOrders([
      { id: 1, product: 'Pain Relief Tablets', quantity: 100, status: 'Pending' },
      { id: 2, product: 'Vitamin C Syrup', quantity: 50, status: 'Delivered' },
      { id: 3, product: 'Antibiotic Cream', quantity: 30, status: 'Processing' },
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Supplier Dashboard</h1>
      {user ? <h2>Welcome, {user.name || user.email}!</h2> : <p>Loading user info...</p>}

      <section style={{ marginTop: '2rem' }}>
        <h3>Current Orders</h3>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '1rem',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '8px', border: '1px solid #ccc' }}>Order ID</th>
                <th style={{ padding: '8px', border: '1px solid #ccc' }}>Product</th>
                <th style={{ padding: '8px', border: '1px solid #ccc' }}>Quantity</th>
                <th style={{ padding: '8px', border: '1px solid #ccc' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.id}</td>
                  <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.product}</td>
                  <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.quantity}</td>
                  <td style={{ padding: '8px', border: '1px solid #ccc' }}>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <button
        onClick={handleLogout}
        style={{
          marginTop: '3rem',
          padding: '10px 20px',
          backgroundColor: '#ff4d4f',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default SupplierDashboard;
