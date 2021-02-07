import React from 'react'
import './bootsrap.min.css';
import '../boxicons/css/boxicons.css';
import '../icofont/icofont.min.css';
import './formMap.css';
import "./home.css"
import "./homeco.css"
import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {
    return (
        <div class = 'bgg1'>
          <Carousel>
  <Carousel.Item>

    <img width="140" height="10" src="images/hospitalbg.png" alt="doctor"/>
       
  
  
    <Carousel.Caption>
      {/* <h3 class = 'carotext'>First slide label</h3>
      <p class = 'carosmall'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img width="140" height="10" src="images/hospi2.png" alt="doctor"/>
  

    <Carousel.Caption>
      {/* <h3 class = 'carotext'>Respect Doctors</h3>
      <p class = 'carosmall'>IN last few mounths many problems occured there were may ups and downs . At that crutial time doctors were there to let us out of those situation .So it is our responsability to Give them the required Respect</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img width="140" height="10" src="images/hospifinal.png" alt="doctor"/>
  
  


    <Carousel.Caption>
      {/* <h3 class = 'carotext'>Third slide label</h3>
      <p class = 'carosmall'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
           
            {/* login options start here */}
            <main>
              <div class="row " >
      <div class="col-lg-4 ">
        <img class="bd-placeholder-img rounded-circle solo" width="140" height="140" src="images/patient.jpg" alt="patient"/>
       
        <h2 class="gap">LOGIN FOR PATIENT</h2>
        <p class ="solo">This is for the patient to login for there health checkup and all the other details. the patient is one of our valueable consumer and we will do every thing posible to help them out in there medical conditions.</p>
        <p><a class="btn btn-secondary colour1" href="Login_as_a_patient.html" role="button">login</a></p>
      </div>
      {/* <!-- /.col-lg-4 --> */}
      <div class="col-lg-4 ">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="images/doctor.jpeg" alt="doctor"/>
       
        <h2 class="gap">LOGIN FOR DOCTOR</h2>
        <p>this is for the doctors to register or login .Doctors served the whole nation in this padamic so this is our effeort to make there work easier by automating the patient - doctor interface</p>
        <p><a class="btn btn-secondary colour1" href="login_as_doctor.html" role="button">login</a></p>
      </div>
      {/* <!-- /.col-lg-4 --> */}
      <div class="col-lg-4 ">
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="images/reception.jpg" alt="reception"/>
       
        <h2 class="gap">LOGIN FOR RECEPTIONIST </h2>
        <p>This is for the hospital receptionist to login to manupilate and edit the data of Hospital, Doctors, Patirents, Medicos related to the hospital they are working for and help in creating a beeter inviornment for the patients and beeter treatment </p>
        <p><a class="btn btn-secondary colour1" href="pp_login.html" role="button">login</a></p>
      </div>
      {/* <!-- /.col-lg-4 --> */}
    </div>
    <hr class="featurette-divider maincol"/>

    <div class="row featurette maincol">
      <div class="col-md-7">
        <h2 class="featurette-heading">Our associate hospital <span class="text-muted">Best of the class hospital</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="images/10130.jpg" alt="hospital buldings"/>
        

      </div>
    </div>
    <hr class="featurette-divider maincol"/>

<div class="row featurette maincol">
  <div class="col-md-7 order-md-2">
    <h2 class="featurette-heading">Best faculty<span class="text-muted"> See for yourself.</span></h2>
    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
  </div>
  <div class="col-md-5 order-md-1">
    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="images/3568984.jpg" alt="doctors "/>
    

  </div>
</div>
<hr class="featurette-divider maincol "/>

    <div class="row featurette maincol">
      <div class="col-md-7">
        <h2 class="featurette-heading">addvanced machinery<span class="text-muted"> For best treatment</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="images/7616.jpg" alt="cro machine"/>
        

      </div>
    </div>

    <hr class="featurette-divider maincol"/>
    <div>
            <div>
            <section id="counts" class="counts">
      <div class="cont" data-aos="fade-up">

        <div class="row no-gutters ">

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch align">
            <div class="count-box">
              <i class="icofont-doctor-alt icolo"></i>
              <span data-toggle="counter-up">85</span>
              <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch align">
            <div class="count-box">
              <i class="icofont-patient-bed icolo"></i>
              <span data-toggle="counter-up">18</span>
              <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch align">
            <div class="count-box">
              <i class="icofont-laboratory icolo"></i>
              <span data-toggle="counter-up">8</span>
              <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch align">
            <div class="count-box">
              <i class="icofont-award icolo"></i>
              <span data-toggle="counter-up">150</span>
              <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
              <a href="#">Find out more &raquo;</a>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section>
    <div>
        {/* <iframe style={{backgroundColor: "lightblue" ,border:"0", width: "100%", height: "350px"}}  src="https://www.google.com/maps/embed?pb=!4m5!3m4!1s0x390cea6389cce867:0x68fcd356fb0791!8m2!3d28.4825193!4d77.5103527" frameborder="0" allowfullscreen></iframe> */}
        <div ><div id="display-googlemap" ><iframe style={{backgroundColor: "lightblue" ,border:"0", width: "100%", height: "350px"}} frameborder="0" src="https://www.google.com/maps/embed/v1/search?q=my+city+hospitam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div></div>
        
        
      </div>

      <div class="cont">

        <div class="row mt-5">

          <div class="col-lg-6">

            <div class="row">
              <div class="col-md-12">
                <div class="info-box">
                  <i class="bx bx-map icolo"></i>
                  <h3>Our Address</h3>
                  <p>B 239 Mu 1 Greater Noida, Uttar Pradesh</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bx bx-envelope icolo"></i>
                  <h3>Email Us</h3>
                  <p>hertia@xertz.co.in<br/>priyanshu@xertz.co.in</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4">
                  <i class="bx bx-phone-call icolo"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6 info-box2">
            <form action="contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col form-group">
                  <input type="text" name="name" class="form-control nameclass" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="col form-group mt-3">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
            </div>

        
        </div>

            
                </main>
                

        
        </div>
    )
}
