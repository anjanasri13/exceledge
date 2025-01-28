import React from "react";
import { Link } from "react-router-dom";
import Footerlogo from "../assests/Footerlogo.png";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import linkedin from "../assests/linkedin.png";
import insta from "../assests/insta.png";
import phone from "../assests/phone.png";
import mail from "../assests/mail.png";

export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0780FD1F",
          padding: "5%",
          gap: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <Link>
              <img src={Footerlogo} width="242px" height="34px" alt="logo" />
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 20 }}>
                <img src={phone} width="32px" height="32px" alt="" />
                <Link
                  to=""
                  style={{ textDecoration: "none", color: "#1B1B1B" }}
                >
                  +1 8888 8888
                </Link>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <img src={mail} width="32px" height="32px" alt="" />
                <Link
                  to=""
                  style={{ textDecoration: "none", color: "#1B1B1B" }}
                >
                  info@exceledge.com
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#1B1B1B",
                marginTop: 0,
              }}
            >
              Quick Links
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Link
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "#1B1B1B",
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Home
              </Link>
              <Link
                to="/education"
                style={{
                  textDecoration: "none",
                  color: "#1B1B1B",
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Solutions
              </Link>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "#1B1B1B",
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Company
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#1B1B1B",
                  fontSize: 18,
                  fontWeight: 400,
                }}
              >
                Resources
              </Link>
            </div>
          </div>

          <div style={{ width: "25%" }}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#1B1B1B",
                marginTop: 0,
              }}
            >
              Address
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: "#1B1B1B",
                marginTop: 0,
                lineHeight: "23.44px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Sed mattis id suspendisse
              pulvinar velit velit sed.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
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

      <p
        style={{
          fontSize: 18,
          fontWeight: 400,
          color: "#FFFFFF",
          marginBottom: 0,
          marginTop: 0,
          textAlign: "center",
          backgroundColor: "#0780FD",
          padding: "1% 0%",
        }}
      >
        © 2024 Copyright | All Rights Reserved
      </p>
    </>
  );
}
