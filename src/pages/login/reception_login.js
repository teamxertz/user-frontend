import React from 'react'
import { Link } from "react-router-dom"


export default function Reception() {
    return (
        <div>
            <div class="login-box">
  <h1>Login</h1>
  <div class="textbox">
    <i class="fas fa-user"></i>
    <input type="text" placeholder="Username"/>
  </div>
  <div class="textbox">
    
    <i class="fas fa-id-card-alt"></i>
    <input type="text" placeholder="Hospitam id"/>
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
