import React from 'react';
import { Link } from "react-router-dom";
import "../footer/footer.css";


export default function Footer() {
    return (
        <div>
           <footer id="footer">
    <div class="footer-top">
      <div class="cont">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>HERTIA</h3>
              <p>
                B - 239 Mu 1 Greater Noida<br/><br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong>www.hertia@xertz.co.in<br/>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Book Appointment</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Order Medicine</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Online Conseltancy</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Medical Lab</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">OPDs</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>The most reputated medical site ever</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>HERTIA</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
      </div>
    </div>
  </footer>
            

        
        </div>
    )
}
