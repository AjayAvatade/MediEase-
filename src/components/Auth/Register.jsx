// Create a registration form with name, email, phone, password, etc. Handle validation and call register API. Show success message or redirect to login.


import React from 'react'

function Register() {
  return (
    <div>
    <div className="login-box">
        <h2>REGISTER</h2>
        <form action="/login">
          <div className="form-login">
            <label htmlFor="username">Email or Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-login">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-login">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit" className="login-button">Sign Up</button>

          <div id="forgot-password1" style={{marginTop: '20px'}}>
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
