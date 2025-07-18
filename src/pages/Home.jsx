// Landing or default page. Add a welcome banner, login/register links, or dashboards based on role. Use hooks to determine user session (if applicable).


import React from 'react'
import { Link } from 'react-router-dom'
import image from './MediEase1.jpg'
import logo from './MediEase logo 3.png'

function Home() {
  return (
    <div>
        <div className="navbar-container"> 
         <header>
          <div className="header-container">  
            <div className="logo"><img src={logo}/></div>
        
              <button className="login-btn" id="login-btn">
              <Link to='/login'><i className="fa-solid fa-user"></i> Login</Link></button>
          </div>
         </header>
        <section className="hero">
        <div className="hero-content-wrapper">
            <div className="hero-text">
                <h1>Revolutionize Your <span>Pharmacy</span></h1>
                <p>Streamline inventory, billing and patient care with our powerful Chemist ERP system.</p>
                <div className="hero-cta">
                    <Link to="/learnmore" className="primary-btn">LEARN MORE</Link>
                    <Link to="#see-details" className="secondary-btn">SEE DETAILS</Link>
                </div>
            </div>
            <div className="hero-image">
                <img src={image} 
                alt="Doctor using modern pharmacy ERP system with digital interface 
                icons showing charts, prescriptions, and medical symbols"/>
            </div>
        </div> 
    </section>
    </div>
</div>
  )
}

export default Home
