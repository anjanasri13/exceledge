import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../styles/Header.css";
import Flogo from "../assests/Flogo.png";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Flogo} alt="logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <CloseOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={`header-nav ${isMenuOpen ? "open" : ""}`}>
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
        <Button
          className="btn-responsive"
          style={{
            fontSize: 16,
            fontWeight: 500,
            backgroundColor: "#473FE1",
            borderRadius: "100px",
            width: "136px",
            height: "44px",
            color: "#FFFFFF",
          }}
        >
          Enroll Now
        </Button>
      </div>
      <div className="btn">
        <Button
          style={{
            fontSize: 15,
            fontWeight: 500,
            backgroundColor: "#473FE1",
            borderRadius: "8px",
            width: "136px",
            height: "44px",
            color: "#FFFFFF",
          }}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
}
