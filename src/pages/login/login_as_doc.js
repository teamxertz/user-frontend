import React from 'react'
import { Link } from "react-router-dom"
import "./login_as_patient.css"

export default function Doc_login() {
    return (
        <div>
            <div class="login-box">
  <h1>Login</h1>
  <div class="textbox">
    <i class="fas fa-user"></i>
    <input type="text" placeholder="Username"/>
  </div>

  <div class="textbox">
    <i class="fas fa-lock"></i>
    <input type="password" placeholder="Password"/>
  </div>

  <input type="button" class="btn" value="Sign in"/>
</div>
        </div>
    )
}
