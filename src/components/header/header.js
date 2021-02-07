import React from 'react'
import "./header.css"


import { Link } from "react-router-dom"
export default function Header() {
    return (

        <div>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top navo header__wrapper">
    <div class="container-fluid">
      {/* <a href = "/xertz site/index.html">HESTIA</a> */}
    <Link to="/xertz" className="header__logo">
                HESTIA
            </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item active">
            <Link to="/home" className="nav-link header__link">Home</Link>
            
          </li>
          <li class="nav-item">
          <Link to="/BookAppointment" className=" nav-link header__link">Book appointment</Link>
            
          </li>
          
          <li class="nav-item">
            <Link to="/Medicine" className=" nav-link header__link">Order medicines</Link>
          
            
          </li>
          <li class="nav-item">
            <Link to="/about" className=" nav-link header__link">About us</Link>
          
            
          </li>
          
          <li class="nav-item">
            <Link to="/login" className=" nav-link header__link">Login</Link>
          
            
          </li>
          <li class="nav-item">
            <Link to="/register" className=" nav-link header__link">Register</Link>
          
            
          </li>
          
          
        </ul>
        <form class="d-flex">
          <input  class="form-control me-2 sbtext" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success sbox" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

        
        </div>
    )
}
