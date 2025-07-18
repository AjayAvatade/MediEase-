// Admin landing panel. Show metrics like number of users, system logs, or management controls. Use useEffect to fetch stats.


import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // delay for animation effect
  }, []);

  const styles = {
    header: {
      backgroundColor: '#0f172a',
      color: 'white',
      padding: '24px',
      textAlign: 'center',
      fontSize: '2rem',
      letterSpacing: '1px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    dashboardContainer: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f1f5f9',
    },
    sidebar: {
      width: '220px',
      backgroundColor: '#1e293b',
      color: '#fff',
      padding: '30px 20px',
      boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
    },
    sidebarList: {
      listStyle: 'none',
      padding: 0,
    },
    sidebarItem: {
      margin: '20px 0',
      fontWeight: '500',
      fontSize: '1rem',
      padding: '10px 15px',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: '0.3s',
    },
    sidebarItemHover: {
      backgroundColor: '#334155',
    },
    mainContent: {
      flex: 1,
      padding: '40px',
    },
    cardsWrapper: {
      display: 'flex',
      gap: '20px',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    dashboardCard: (i) => ({
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      width: '220px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      opacity: animate ? 1 : 0,
      transform: animate ? 'scale(1)' : 'scale(0.95)',
      transition: 'all 0.6s ease ${i * 0.15}s',
    }),
    cardTitle: {
      fontSize: '0.9rem',
      color: '#64748b',
      marginBottom: '8px',
    },
    cardValue: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#0f172a',
    },
    sectionCard: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '30px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
    },
    th: {
      backgroundColor: '#e2e8f0',
      padding: '12px',
      textAlign: 'left',
      fontWeight: '600',
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #e2e8f0',
    },
    orderList: {
      listStyleType: 'none',
      paddingLeft: '0',
      marginTop: '10px',
    },
    orderItem: {
      background: '#f8fafc',
      padding: '12px 16px',
      borderRadius: '8px',
      marginBottom: '10px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    }
  };

  const handleHover = (e, enter = true) => {
    e.target.style.backgroundColor = enter
      ? styles.sidebarItemHover.backgroundColor
      : 'transparent';
  };

  const cardsData = [
    { title: 'Total Medicines', value: 38 },
    { title: 'Orders Today', value: 12 },
    { title: 'Out of Stock', value: 3 },
    { title: 'Low Inventory', value: 6 },
  ];

  return (
    <div>
      <header style={styles.header}>
        Madiease Admin Dashboard
      </header>

      <div style={styles.dashboardContainer}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul style={styles.sidebarList}>
            {['Dashboard', 'Inventory', 'Orders', 'Reports', 'Logout'].map((item, index) => (
              <li
                key={index}
                style={styles.sidebarItem}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main style={styles.mainContent}>

          {/* 🧊 Dashboard Animated Cards */}
          <div style={styles.cardsWrapper}>
            {cardsData.map((card, i) => (
              <div key={i} style={styles.dashboardCard(i)}>
                <div style={styles.cardTitle}>{card.title}</div>
                <div style={styles.cardValue}>{card.value}</div>
              </div>
            ))}
          </div>

          {/* 📦 Inventory Section */}
          <section style={styles.sectionCard}>
            <h3>📦 Inventory Overview</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Medicine</th>
                  <th style={styles.th}>Quantity</th>
                  <th style={styles.th}>Expiry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Paracetamol</td>
                  <td style={styles.td}>120</td>
                  <td style={styles.td}>Dec 2025</td>
                </tr>
                <tr>
                  <td style={styles.td}>Ibuprofen</td>
                  <td style={styles.td}>80</td>
                  <td style={styles.td}>Jan 2026</td>
                </tr>
                <tr>
                  <td style={styles.td}>Cetrizine</td>
                  <td style={styles.td}>150</td>
                  <td style={styles.td}>Feb 2027</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 🧾 Orders Section */}
          <section style={styles.sectionCard}>
            <h3>🧾 Recent Orders</h3>
            <ul style={styles.orderList}>
              <li style={styles.orderItem}>#1023 – Delivered</li>
              <li style={styles.orderItem}>#1024 – Pending</li>
              <li style={styles.orderItem}>#1025 – Cancelled</li>
              <li style={styles.orderItem}>#1026 – Delivered</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
