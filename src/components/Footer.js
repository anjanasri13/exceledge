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
      {/* <div className="footer">
        <div className="footer-container">
          <div className="footer-column-container">
            <div className="footer-row">
              <div>
                <img src={Flogo} className="footer-logo" alt="logo" />
              </div>
              <div className="footer-column address">
                <p className="footer-desc">
                  31/13, 2nd floor, Burkit Rd, near CANARA BANK, CIT Nagar East,
                  T. Nagar, Chennai, Tamil Nadu 600017
                </p>
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
              <Link to="/" className="footer-nav">
                Home
              </Link>
              <Link to="/about-us" className="footer-nav">
                About Us
              </Link>
              <Link to="/course" className="footer-nav">
                Our courses
              </Link>
              <Link to="/gallery" className="footer-nav">
                Gallery
              </Link>
              <Link to="/contact-us" className="footer-nav">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <p className="footer-title">Contact</p>
            <div className="footer-column">
              <div>
                <Link to="" className="footer-contact">
                  <p>+1 8888 8888</p>
                </Link>
              </div>
              <div>
                <Link to="" className="footer-contact">
                  <p> info@exceledge.com</p>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="footer-title">Follow us on</p>
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
      </div> */}

      <div className="footer">
        <div className="footer-container">
          {/* Left Section - Company Info */}
          <div className="footer-column company-info">
            <img src={Flogo} className="footer-logo" alt="logo" />
            <p className="footer-desc">
              31/13, 2nd floor, Burkit Rd, near CANARA BANK, CIT Nagar East, T.
              Nagar, Chennai, Tamil Nadu 600017
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="footer-column">
            <p className="footer-title">Quick Links</p>
            <Link to="/" className="footer-nav">
              Home
            </Link>
            <Link to="/about-us" className="footer-nav">
              About Us
            </Link>
            <Link to="/course" className="footer-nav">
              Our Courses
            </Link>
            <Link to="/gallery" className="footer-nav">
              Gallery
            </Link>
            <Link to="/contact-us" className="footer-nav">
              Contact Us
            </Link>
          </div>

          {/* Right Section - Contact Info */}
          <div className="footer-column">
            <p className="footer-title">Contact</p>

            <div className="footer-column">
              <div>
                <Link to="" className="footer-contact">
                  +1 8888 8888
                </Link>
              </div>
              <div>
                <Link to="" className="footer-contact">
                  info@exceledge.com
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="footer-column">
            <p className="footer-title">Follow us on</p>
            <div className="social-icons">
              <Link to="">
                <img src={facebook} alt="Facebook" />
              </Link>
              <Link to="">
                <img src={twitter} alt="Twitter" />
              </Link>
              <Link to="">
                <img src={linkedin} alt="LinkedIn" />
              </Link>
              <Link to="">
                <img src={insta} alt="Instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2024 Exceledge. All rights reserved</p>
    </>
  );
}
