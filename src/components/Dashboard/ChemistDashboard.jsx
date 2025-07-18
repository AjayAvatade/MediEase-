// Chemist panel. Show inventory, pending orders, request supplies, etc. Add tables/cards with CRUD options.



import React from 'react'

function ChemistDashboard() {
  return (
    <div>
      <body>
  <div className="dashboard">
    <header className="dashboard-header">
      <div className="logo"><i class="fa-solid fa-flask "></i> Chemist Dashboard</div>
      <div className="user-info">
        <span className="user-name">Dr. Alex Chan</span>
        <button className="logout-btn">Logout</button>
      </div>

    </header>
    <div className="stats-cards">
      <div className="card green">
        <i className="fa-solid fa-pills"></i>
        <p>Total Inventory</p>
        <h3>582</h3>
      </div>
      <div className="card blue">
        <i className="fa-solid fa-box-open"></i>
        <p>Today's Orders</p>
        <h3>24</h3>
      </div>
      <div className="card yellow">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <p>Low Stock Items</p>
        <h3>8</h3>
      </div>
      <div className="card purple">
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <p>Revenue Today</p>
        <h3>₹ 15,000</h3>
      </div>
    </div>

   
    
     <div className='Inventory-section' id='Inventory-tab'>
      <div className="section-header">
        <h2>Inventory Management</h2>
        <div>
          <button className="add-btn">+ Add Item</button>
          <button className="export-btn">Export</button>
        </div>
      </div>

 

    <table className="inventory-table">
      <thead>
        <tr>
           <th>Medicine</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Expiry Date</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
      </thead>
    
    <tbody>
          <tr>
            <td>Acetaminophen 500mg</td>
            <td>Pain Relief</td>
            <td>250</td>
            <td>2024-11-25</td>
            <td><span className="status instock">In Stock</span></td>
            <td className="actions">
              <i className="fa-solid fa-eye view"></i>
              <i className="fa-solid fa-pen-to-square edit"></i>
              <i className="fa-solid fa-trash delete"></i>
            </td>
          </tr>
          <tr>
            <td>Amoxicillin 250mg</td>
            <td>Antibiotic</td>
            <td>45</td>
            <td>2024-08-20</td>
            <td><span className="status lowstock">Low Stock</span></td>
            <td className="actions">
              <i className="fa-solid fa-eye view"></i>
              <i className="fa-solid fa-pen-to-square edit"></i>
              <i className="fa-solid fa-trash delete"></i>
            </td>
          </tr>
           <tr>
            <td>Ibuprofen 400mg</td>
            <td>Pain Relief</td>
            <td>180</td>
            <td>2025-03-10</td>
            <td><span className="status instock">In Stock</span></td>
            <td className="actions">
              <i className="fa-solid fa-eye view"></i>
              <i className="fa-solid fa-pen-to-square edit"></i>
              <i className="fa-solid fa-trash delete"></i>
            </td>
          </tr>
          <tr>
            <td>Metformin 500mg</td>
            <td>Diabetes</td>
            <td>12</td>
            <td>2024-10-10</td>
            <td><span className="status critical">Critical</span></td>
            <td className="actions">
              <i className="fa-solid fa-eye view"></i>
              <i className="fa-solid fa-pen-to-square edit"></i>
              <i className="fa-solid fa-trash delete"></i>
            </td>
          </tr>
           <tr>
            <td>Lisinopril 10mg</td>
            <td>Hypertension</td>
            <td>95</td>
            <td>2024-11-25</td>
            <td><span className="status instock">In Stock</span></td>
            <td className="actions">
              <i className="fa-solid fa-eye view"></i>
              <i className="fa-solid fa-pen-to-square edit"></i>
              <i className="fa-solid fa-trash delete"></i>
            </td>
          </tr>
    </tbody>
    </table>
    </div>

   <div className="Inventory-section" id="orders-tab" >
      <div className="section-header">
        <h2>Orders Management</h2>
        <div>
          <button className="add-btn">+ New Order</button>
          <button className="export-btn">Export</button>
        </div>
      </div>
 
       
        
    <table className="inventory-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           <tr>
            <td>#ORD1023</td>
            <td>John Smith</td>
            <td>3</td>
            <td>₹ 5000</td>
            <td>2025-07-11</td>
            <td><span class="status instock">Completed</span></td>
            <td className="actions">
              <i className="fa-solid fa-eye view"></i>
              <i className="fa-solid fa-trash delete"></i>
            </td>
          </tr>
          
          <tr>
            <td>#ORD1024</td>
            <td>Mary Jane</td>
            <td>2</td>
            <td>₹ 2500</td>
            <td>2025-07-11</td>
            <td><span class="status lowstock">Pending</span></td>
            <td className="actions">
              <i className="fa-solid fa-eye view"></i>
              <i className="fa-solid fa-trash delete"></i>
            </td>
          </tr>
        </tbody>
       </table>
       </div>
    </div>
    
    </body>
    </div>
  )
}

export default ChemistDashboard
