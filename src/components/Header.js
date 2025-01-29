import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "../assests/Logo.png";

const solutionsItems = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        1st menu item
      </a>
    ),
  },
];

const companyItems = [
  {
    key: "1",
    label: (
      <Link to="/about-us" style={{ textDecoration: "none", color: "#1b1b1b" }}>
        About Us
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link to="/careers" style={{ textDecoration: "none", color: "#1b1b1b" }}>
        Careers
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        to="/contact-us"
        style={{ textDecoration: "none", color: "#1b1b1b" }}
      >
        Contact Us
      </Link>
    ),
  },
];

export default function Header() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-around",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "1%",
      }}
    >
      <div>
        <img src={logo} width="242px" height="34px" alt="logo" />
      </div>
      <div
        style={{
          display: "flex",
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#1b1b1b" }}>
          Home
        </Link>
        <Link
          to="/about-us"
          style={{ textDecoration: "none", color: "#1b1b1b" }}
        >
          About Us
        </Link>{" "}
        <Link to="/course" style={{ textDecoration: "none", color: "#1b1b1b" }}>
          Courses{" "}
        </Link>
        <Link
          to="/gallery"
          style={{ textDecoration: "none", color: "#1b1b1b" }}
        >
          Gallery
        </Link>
        <Link
          to="/contact-us"
          style={{ textDecoration: "none", color: "#1b1b1b" }}
        >
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
