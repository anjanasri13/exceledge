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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5%",
          position: "relative",
        }}
      >
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
        <p
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#1B1B1B",
            width: "60%",
            textAlign: "center",
          }}
        >
          Contact Us
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: "#1B1B1B",
            opacity: "80%",
            width: "35%",
            textAlign: "center",
            lineHeight: "34px",
          }}
        >
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

      <div style={{ marginTop: "15%", position: "relative" }}>
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
        <div
          style={{
            display: "flex",
            gap: 30,
            margin: "5% 5%",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              border: "1px solid #0780FD",
              borderRadius: "20px",
              display: "flex",
              padding: "2%",
              gap: 20,
              width: "100%",
            }}
          >
            <img src={location} width="62px" height="62px" alt="" />
            <p
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: "#1B1B1B",
                width: "60%",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Link>

          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              border: "1px solid #0780FD",
              borderRadius: "20px",
              display: "flex",
              padding: "2%",
              alignItems: "center",
              gap: 20,
              width: "100%",
            }}
          >
            <img src={phone} width="62px" height="62px" alt="" />
            <p style={{ fontSize: 20, fontWeight: 400, color: "#1B1B1B" }}>
              +1 8888 8888
            </p>
          </Link>

          <Link
            to="/email"
            style={{
              textDecoration: "none",
              border: "1px solid #0780FD",
              borderRadius: "20px",
              display: "flex",
              padding: "2%",
              alignItems: "center",
              gap: 20,
              width: "100%",
            }}
          >
            <img src={mail} width="62px" height="62px" alt="" />
            <p style={{ fontSize: 20, fontWeight: 400, color: "#1B1B1B" }}>
              info@scalegreat.group
            </p>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "15%", position: "relative" }}>
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
        <div
          style={{
            backgroundColor: "#0780FD",
            borderRadius: "50px",
            margin: "10%",
            padding: "5%",
          }}
        >
          <form>
            <div style={{ display: "flex", gap: 30 }}>
              <div className="form-control">
                <label style={{ fontSize: 24, fontWeight: 400 }}>
                  Your Name
                </label>
                <input type="text" required style={{ marginTop: "15%" }} />
              </div>
              <div className="form-control">
                <label style={{ fontSize: 24, fontWeight: 400 }}>
                  Your Email
                </label>
                <input type="email" required style={{ marginTop: "15%" }} />
              </div>
              <div className="form-control">
                <label style={{ fontSize: 24, fontWeight: 400 }}>
                  Phone Number
                </label>
                <input type="tel" required style={{ marginTop: "15%" }} />
              </div>
            </div>
            <div className="form-control">
              <label style={{ fontSize: 24, fontWeight: 400 }}>Message</label>
              <textarea
                type="tel"
                required
                style={{
                  marginTop: "5%",
                  width: "100%",
                  backgroundColor: "#0780FD",
                  borderRight: "none",
                  borderLeft: "none",
                  borderTop: "none",
                  borderBottomColor: "#FFFFFF",
                  resize: "none",
                  overflow: "hidden",
                  outline: "none",
                  color: "#ffffff",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
