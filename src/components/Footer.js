import React from "react";
import { Link } from "react-router-dom";
import Footerlogo from "../assests/footerlogo.png";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import linkedin from "../assests/linkedin.png";
import insta from "../assests/insta.png";
import phone from "../assests/phone.png";
import mail from "../assests/mail.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-column-container">
            <div>
              <img src={Footerlogo} width="144px" height="53px" alt="logo" />
            </div>
            <div className="footer-column">
              <div>
                <Link to="" className="footer-contact">
                  <img src={phone} width="32px" height="32px" alt="" />
                  +1 8888 8888
                </Link>
              </div>
              <div>
                <Link to="" className="footer-contact">
                  <img src={mail} width="32px" height="32px" alt="" />
                  info@exceledge.com
                </Link>
              </div>
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
              Lorem ipsum dolor sit amet consectetur. Sed mattis id suspendisse
              pulvinar velit velit sed.
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
