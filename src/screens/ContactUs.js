import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import location from "../assests/location.png";
import phone from "../assests/phone.png";
import mail from "../assests/mail.png";
import "../styles/contactUs.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [validationError, setValidationError] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateInputs = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Valid email is required.";
    if (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber))
      errors.mobileNumber = "Valid 10-digit mobile number is required.";
    if (!formData.message) errors.message = "Message is required.";

    setValidationError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationError({ ...validationError, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setIsLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        message: formData.message,
      };
      console.log("payload", payload);
      const response = await axios.post(
        "https://creativa.academy/backend/api/enquiry",
        payload
      );
      toast.success("Form submitted successfully!");
      console.log("Response:", response.data);
      setFormData({
        name: "",
        email: "",
        mobileNumber: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
            <circle cx="54.4284" cy="14.8571" r="14.8571" fill="#473FE1" />
            <circle cx="31.2139" cy="58.5" r="19.5" fill="#473FE1" />
            <circle cx="11.7141" cy="26" r="11.1429" fill="#473FE1" />
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
              fill="#473FE1"
            />
            <circle
              cx="36.6074"
              cy="18.75"
              r="18.75"
              transform="rotate(-180 36.6074 18.75)"
              fill="#473FE1"
            />
            <circle
              cx="55.357"
              cy="50"
              r="10.7143"
              transform="rotate(-180 55.357 50)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <p className="contact-title">Contact Us</p>
        <p className="contact-description">
          Explore industry-aligned programs designed to prepare you for success
          in tech.
        </p>
        <Button
          className="contact-btn"
          style={{
            backgroundColor: "#473FE1",
            borderRadius: "100px",
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
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
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
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
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
              31/13, 2nd floor, Burkit Rd, near CANARA BANK, CIT Nagar East, T.
              Nagar, Chennai, Tamil Nadu 600017
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
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
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
              fill="#473FE1"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="#473FE1"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="#473FE1"
            />
          </svg>
        </div>
        <div className="services-text">
          <p className="services-title">Send Us A Message</p>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-control">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
                {validationError.name && (
                  <p className="error-message">{validationError.name}</p>
                )}
              </div>
              <div className="form-control">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
                {validationError.email && (
                  <p className="error-message">{validationError.email}</p>
                )}
              </div>
              <div className="form-control">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  required
                  className="form-input"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                {validationError.mobileNumber && (
                  <p className="error-message">
                    {validationError.mobileNumber}
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="form-label">Message</label>
              <textarea
                type="msg"
                name="message"
                required
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
              />
              {validationError.message && (
                <p className="error-message">{validationError.message}</p>
              )}
            </div>

            <div className="form-button-container">
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  // backgroundColor: "#ffffff",
                  backgroundColor: isLoading ? "#ccc" : "#ffffff",
                  borderRadius: "100px",
                  width: "156px",
                  height: "56px",
                  color: "#473FE1",
                  border: "none",
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
