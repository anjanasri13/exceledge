import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import logo from "../assests/logo.png";
import "../styles/Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about-us" className="nav-link">
          About Us
        </Link>
        <Link to="/course" className="nav-link">
          Courses
        </Link>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
        <Link to="/contact-us" className="nav-link">
          Contact Us
        </Link>
      </div>
      <div>
        <Button
          style={{
            fontSize: 16,
            fontWeight: 500,
            backgroundColor: "#0780FD",
            borderRadius: "100px",
            width: "136px",
            height: "44px",
            color: "#FFFFFF",
          }}
        >
          Enroll Now
        </Button>
      </div>
    </div>
  );
}
