// Landing or default page. Add a welcome banner, login/register links, or dashboards based on role. Use hooks to determine user session (if applicable).


import React from 'react'

function Home() {
  return (
    <div><section className="hero">
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
  )
}

export default Home
