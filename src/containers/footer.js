import React from 'react'
import Footer from '../Components/footer'
import Icon from '../Components/icons'
import styled from 'styled-components'
import './footer.css'

export function FooterContainer() {
    return (
        <>  
    <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Kloudclub</h3>
            <p>
              62 Tennyson Dr.<br></br>
              Short Hills<br></br>
              New Jersey 07078 <br></br>
              <strong>Phone:</strong> (646) 820-0084<br></br>
              <strong>Email:</strong> contactus@kloudclub.com<br></br>
            </p>
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
            
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Be The First To Know</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe" />
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>KloudClub</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
         
          Designed by <a href="">Ayush Gupta</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      </div>
  </footer>
  
  </>
    )

}
const footer =styled.div``;