import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import location from "../assests/location.png";
import phone from "../assests/phone.png";
import mail from "../assests/mail.png";
import "../styles/contactUs.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function ContactUs() {
  return (
    <div>
      <Header />
      <div className="contact-section">
        <div className="Clayer1">
          <svg
            width="70"
            height="78"
            viewBox="0 0 70 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="54.4284" cy="14.8571" r="14.8571" fill="#0780FD" />
            <circle cx="31.2139" cy="58.5" r="19.5" fill="#0780FD" />
            <circle cx="11.7141" cy="26" r="11.1429" fill="#0780FD" />
          </svg>
        </div>
        <div className="Clayer2">
          <svg
            width="67"
            height="75"
            viewBox="0 0 67 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14.2856"
              cy="60.7143"
              r="14.2857"
              transform="rotate(-180 14.2856 60.7143)"
              fill="#0780FD"
            />
            <circle
              cx="36.6074"
              cy="18.75"
              r="18.75"
              transform="rotate(-180 36.6074 18.75)"
              fill="#0780FD"
            />
            <circle
              cx="55.357"
              cy="50"
              r="10.7143"
              transform="rotate(-180 55.357 50)"
              fill="#0780FD"
            />
          </svg>
        </div>
        <p className="contact-title">Contact Us</p>
        <p className="contact-description">
          Explore industry-aligned programs designed to prepare you for success
          in tech.
        </p>
        <Button
          style={{
            fontSize: 16,
            fontWeight: 500,
            backgroundColor: "#0780FD",
            borderRadius: "100px",
            width: "156px",
            height: "56px",
            color: "#FFFFFF",
          }}
        >
          Enroll Now
        </Button>
      </div>

      <div className="contact-container">
        <div className="Clayer3">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#0780FD" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#0780FD" />
            <circle cx="6" cy="14" r="6" fill="#0780FD" />
          </svg>
        </div>
        <div className="Clayer4">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#0780FD"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#0780FD"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#0780FD"
            />
          </svg>
        </div>
        <div className="services-text">
          <p className="services-title">Get in Touch</p>
        </div>
        <div className="contact-links">
          <Link className="contact-card">
            <img src={location} className="contact-icon" alt="" />
            <p className="contact-card-p">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Link>

          <Link className="contact-card">
            <img src={phone} className="contact-icon" alt="" />
            <p>+1 8888 8888</p>
          </Link>

          <Link className="contact-card">
            <img src={mail} className="contact-icon" alt="" />
            <p>info@scalegreat.group</p>
          </Link>
        </div>
      </div>

      <div className="contact-container">
        <div className="Clayer5">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="#0780FD" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#0780FD" />
            <circle cx="6" cy="14" r="6" fill="#0780FD" />
          </svg>
        </div>
        <div className="Clayer6">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="34"
              r="8"
              transform="rotate(-180 8 34)"
              fill="#0780FD"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#0780FD"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#0780FD"
            />
          </svg>
        </div>
        <div className="services-text">
          <p className="services-title">Send Us A Message</p>
        </div>
        <div className="contact-form-container">
          <form>
            <div className="form-row">
              <div className="form-control">
                <label className="form-label">Your Name</label>
                <input type="text" required className="form-input" />
              </div>
              <div className="form-control">
                <label className="form-label">Your Email</label>
                <input type="email" required className="form-input" />
              </div>
              <div className="form-control">
                <label className="form-label">Phone Number</label>
                <input type="tel" required className="form-input" />
              </div>
            </div>
            <div className="form-control">
              <label className="form-label">Message</label>
              <textarea type="tel" required className="form-textarea" />
            </div>

            <div className="form-button-container">
              <button
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  backgroundColor: "#ffffff",
                  borderRadius: "100px",
                  width: "156px",
                  height: "56px",
                  color: "#0780FD",
                  border: "none",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
