import React from 'react'
import { Link } from "react-router-dom"
import "./login.css";

export default function login() {
    return (
        <div class = 'bgg1'>
          
            <h1 class= "spacer"></h1>
            <div class="row">
    <div class="col-lg-4 spacer">
        <img class="bd-placeholder-img rounded-circle solo" width="140" height="140" src= "images/patient.jpg" alt="patient"/>
    
      

      <h2>LOGIN FOR patient</h2>
      <p>This is for the patient to login for there health checkup and all the other details. the patient is one of our valueable consumer and we will do every thing posible to help them out in there medical conditions.</p>
      <Link to="/login_as_patient" className = " btn btn-secondary colour1">Login</Link>
      {/* <p><a class="btn btn-secondary colour1" href="#" role="button">login</a></p> */}
    </div>
    {/* <!-- /.col-lg-4 --> */}
    <div class="col-lg-4 spacer">
    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="images/doctor.jpeg" alt="doctor"/>
     

      <h2>LOGIN FOR DOCTOR</h2>
      <p>this is for the doctors to register or login .Doctors served the whole nation in this padamic so this is our effeort to make there work easier by automating the patient - doctor interface</p>
      <Link to="/login_as_doc" className = " btn btn-secondary colour1">Login</Link>
      
    </div>
    {/* <!-- /.col-lg-4 --> */}
    <div class="col-lg-4 spacer">
    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="images/reception.jpg" alt="reception"/>
      

      <h2>LOGIN FOR RECEPTIONIST </h2>
      <p>This is for the hospital receptionist to login to manupilate and edit the data of Hospital, Doctors, Patirents, Medicos related to the hospital they are working for and help in creating a beeter inviornment for the patients and beeter treatment </p>
      <Link to="/reception_login" className = " btn btn-secondary colour1">Login</Link>
      
    </div>
    {/* <!-- /.col-lg-4 --> */}
  </div>
  <div class="col-lg-4 newer spacer">
    <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="images/reception.jpg" alt="reception"/>
      

      <h2>signup</h2>
      <p>if u haven't signedup please signup first</p>
      <Link to="/signup" className = " btn btn-secondary colour1">SignUp</Link>
      {/* <a class="btn btn-secondary colour1" href="#" role="button">signup</a> */}
      
    </div>
  
        </div>
    )
}
