// Create a login form with email/password inputs. On submit, validate and call backend login API. Redirect to appropriate dashboard on success.

import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
   <div class="login-box">
        <h2>LOGIN</h2>
        <form action="">
            <div class="form-login">
                <label for="username">Email or Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class="form-login">
                <label for="password">Password</label>
                <input type="text" id="password" name="password" required />
            </div>
            <button type="submit" class="login-button" to="/dashboard/supplier">Log In</button>
            <div id="forgot-password">
               <Link to="/reset-password">Forgot Password?</Link>
            </div>
            <div id="forgot-password1">
                Didn't have an account<Link to="/register">Register</Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login
