import React from 'react'
import { Link } from "react-router-dom"
import "./signup.css"
export default function Signup() {
    return (
        <body class = "bg1">

        <div class ="b1">
            <h1>This is signup page</h1>
            <div class="login-box1">
                <h1>Sign Up</h1>
                <div class="textbox1">
                    <i class="fas fa-user"></i>
                    <input class ="impo" type="text" placeholder="Username"/>
                </div>

                <div class="textbox1">
                    <i class="fas fa-lock"></i>
                    <input class ="impo" type="password" placeholder="Password"/>
                </div>

                <div class="textbox1">
                    <i class="fas fa-at"></i>
                    <input class ="impo" type="email" placeholder="Email ID"/>
                </div>

                <input  type="button" class="btn" value="Sign in"/>
                <a class="bottom" href="#">Already Have one ?</a>
            </div>
            <p class = 'bg1'>asasd</p>

        
        </div>
        </body>
    )
}
