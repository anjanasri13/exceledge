import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import linkedin from "../assests/linkedin.png";
import insta from "../assests/insta.png";
import phone from "../assests/phone.png";
import mail from "../assests/mail.png";
import "../styles/Footer.css";
import Flogo from "../assests/Flogo.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-column-container">
            <div className="footer-row">
              <div>
                <img src={Flogo} className="footer-logo" alt="logo" />
              </div>
              <div className="footer-column">
                <div>
                  <Link to="" className="footer-contact">
                    <img src={phone} className="phone-icon" alt="" />
                    <p>+1 8888 8888</p>
                  </Link>
                </div>
                <div>
                  <Link to="" className="footer-contact">
                    <img src={mail} className="phone-icon" alt="" />
                    <p> info@exceledge.com</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="social-icons-responsive">
              <Link to="/">
                <img src={facebook} width="32px" height="32px" alt="" />
              </Link>
              <Link to="/">
                <img src={twitter} width="32px" height="32px" alt="" />
              </Link>
              <Link to="/">
                <img src={linkedin} width="32px" height="32px" alt="" />
              </Link>
              <Link to="/">
                <img src={insta} width="32px" height="32px" alt="" />
              </Link>
            </div>
          </div>

          <div>
            <p className="footer-title">Quick Links</p>

            <div className="footer-column">
              <Link to="/services" className="footer-nav">
                Home
              </Link>
              <Link to="/education" className="footer-nav">
                Solutions
              </Link>
              <Link to="/about" className="footer-nav">
                Company
              </Link>
              <Link to="/contact" className="footer-nav">
                Resources
              </Link>
            </div>
          </div>

          <div className="footer-column address">
            <p className="footer-address-title">Address</p>
            <p className="footer-desc">
              31/13, 2nd floor, Burkit Rd, near CANARA BANK, CIT Nagar East, T.
              Nagar, Chennai, Tamil Nadu 600017
            </p>
          </div>

          <div className="social-icons">
            <Link to="">
              <img src={facebook} width="32px" height="32px" alt="" />
            </Link>
            <Link to="">
              <img src={twitter} width="32px" height="32px" alt="" />
            </Link>{" "}
            <Link to="">
              <img src={linkedin} width="32px" height="32px" alt="" />
            </Link>{" "}
            <Link to="">
              <img src={insta} width="32px" height="32px" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2024 Copyright | All Rights Reserved</p>
    </>
  );
}
