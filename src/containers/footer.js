import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/footer";
import Icon from "../Components/icons";
import "./footer.css";

export function FooterContainer() {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 footer-contact"
                style={{ color: "black" }}
              >
                <h3>Kloudclub</h3>
                <p style={{ color: "black" }}>
                  62 Tennyson Dr.<br></br>
                  Short Hills<br></br>
                  New Jersey 07078 <br></br>
                  <strong>Phone:</strong> (646) 820-0084
                  <br></br>
                  <strong>Email:</strong> contactus@kloudclub.com<br></br>
                </p>
              </div>

              <div
                className="col-lg-2 col-md-6 footer-links"
                style={{ color: "black" }}
              >
                <h4>Useful Links</h4>
                <ul style={{ color: "black" }}>
                  <li>
                    <i className="bx bx-chevron-right"></i> <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/">Terms of service</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <Link to="/">Privacy policy</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg col-md-6 footer-links"></div>

              <div
                className="col-lg-4 col-md-6 footer-newsletter"
                style={{ color: "black" }}
              >
                <h4>Join Our Newsletter</h4>
                <p>Be The First To Know</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>KloudClub</span>
              </strong>
              . All Rights Reserved
            </div>
            {/* <div className="credits">
                            Designed by <a href="">Ayush Gupta</a>
                        </div> */}
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
