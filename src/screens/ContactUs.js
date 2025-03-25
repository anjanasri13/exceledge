import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import location from "../assests/location.png";
import phone from "../assests/phone.png";
import mail from "../assests/mail.png";
import "../styles/contactUs.css";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import image12 from "../assests/image12.png";
import dot1 from "../assests/dot1.png";
import dot2 from "../assests/dot2.png";
import dot3 from "../assests/dot3.png";
import dot4 from "../assests/dot4.png";

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
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <div>
      <Header />
      <div className="hero-section">
        <img src={dot1} alt="" className="Conlayer1" />
        <img src={dot2} alt="" className="Conlayer2" />{" "}
        <img src={dot3} alt="" className="Conlayer3" />{" "}
        <img src={dot4} alt="" className="Conlayer4" />
        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "3px",
            color: " #F461A6",
            textAlign: "center",
          }}
        >
          Contact Us
        </p>
        <p className="contact-title">Get in Touch with us</p>
        <p className="contact-description">
          Explore industry-aligned programs designed to prepare you for success
          in tech.
        </p>
        <Button
          className="contact-btn"
          style={{
            backgroundColor: "#473FE1",
            borderRadius: "12px",
            color: "#FFFFFF",
          }}
        >
          Enroll Now
        </Button>
      </div>
      <div
        style={{
          margin: "0% 5% 5%",
          display: "flex",
          gap: 50,
        }}
      >
        <div>
          <img src={image12} className="main-image" alt="" />
        </div>
        <div>
          <p style={{ fontSize: 56, fontWeight: 600, color: "#141F39" }}>
            Send us a Message
          </p>
          <Form
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 40,
              }}
            >
              <Form.Item
                label="First Name"
                style={{ fontSize: 16, fontWeight: 600, color: "#141F39" }}
              >
                <Input
                  placeholder="eg:- Mark"
                  name="firstname"
                  type="text"
                  style={{
                    width: "370px",
                    height: "56px",
                    borderRadius: "12px",
                  }}
                />
              </Form.Item>
              <Form.Item
                label="Last Name"
                style={{ fontSize: 16, fontWeight: 600, color: "#141F39" }}
              >
                <Input
                  placeholder="eg:- Hendry"
                  name="lastname"
                  type="text"
                  style={{
                    width: "370px",
                    height: "56px",
                    borderRadius: "12px",
                  }}
                />
              </Form.Item>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Item
                label="Email"
                style={{ fontSize: 16, fontWeight: 600, color: "#141F39" }}
              >
                <Input
                  placeholder="eg:- elfiranurul02@gmail.com"
                  name="email"
                  type="email"
                  style={{
                    width: "370px",
                    height: "56px",
                    borderRadius: "12px",
                  }}
                />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                style={{ fontSize: 16, fontWeight: 600, color: "#141F39" }}
              >
                <Input
                  placeholder="eg:- +1 09019 09091"
                  name="Phone Number"
                  type="tel"
                  style={{
                    width: "370px",
                    height: "56px",
                    borderRadius: "12px",
                  }}
                />
              </Form.Item>
            </div>
            <Form.Item
              label="Message"
              style={{ fontSize: 16, fontWeight: 600, color: "#141F39" }}
            >
              <Input.TextArea autoSize={{ minRows: 5, maxRows: 10 }} />
            </Form.Item>
            <Form.Item>
              <Button
                className="connect-btn"
                style={{
                  backgroundColor: "#473FE1",
                  borderRadius: "12px",
                  color: "#FBFDFD",
                }}
              >
                Connect with us
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="contact-container">
        <Link className="contact-card">
          <IoLocationSharp className="contact-icon" />

          <p>
            31/13, 2nd floor, Burkit Rd, near CANARA BANK, CIT Nagar East, T.
            Nagar, Chennai, Tamil Nadu 600017
          </p>
        </Link>

        <Link className="contact-card">
          <FaPhone className="contact-icon" />
          <p>+1 8888 8888</p>
        </Link>

        <Link className="contact-card">
          <IoMail className="contact-icon" />

          <p>info@scalegreat.group</p>
        </Link>
      </div>
      {/* <div className="contact-container">
        <div className="Conlayer5">
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
        <div className="Conlayer6">
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
                className="login-btn"
                type="submit"
                disabled={isLoading}
                style={{
                  backgroundColor: isLoading ? "#ccc" : "#ffffff",
                  borderRadius: "100px",
                  color: "#473FE1",
                  border: "none",
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
              >
                Enroll Now
              </button>
            </div>
          </form>
        </div>
      </div> */}
      <div className="cta-container">
        <p className="cta-title">Kickstart Your Career in Tech Today!</p>
        <p className="cta-subtitle">
          Learn Full Stack Engineering, Business Analysis, and Data Science with
          Industry Experts. Learn Full Stack Engineering, Business Analysis, and
          Data Science with Industry Experts.
        </p>
        <Button
          className="enroll-button"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            color: "#473FE1",
          }}
        >
          Enrol now
        </Button>
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
