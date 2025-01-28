import React from "react";
import Header from "../components/Header";
import { Button } from "antd";
import Footer from "../components/Footer";

export default function Gallery() {
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
          Transform Your Career with Our Expert-Led Courses
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 400,
            color: "#1B1B1B",
            opacity: "80%",
            width: "30%",
            textAlign: "center",
            lineHeight: "34px",
          }}
        >
          Explore industry-aligned programs designed to prepare you for success
          in tech.
        </p>
      </div>

      <div style={{ marginTop: "10%", position: "relative" }}>
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
          <p className="services-title">Moments Of Joy Through Work</p>
          <p className="services-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#0780FD",
          borderRadius: "50px",
          margin: "8% 5%",
          padding: "5%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className="layer20">
          <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="29" cy="8" r="8" fill="white" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="white" />
            <circle cx="6" cy="14" r="6" fill="white" />
          </svg>
        </div>
        <div className="layer21">
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
              fill="white"
            />
            <circle
              cx="20.5"
              cy="10.5"
              r="10.5"
              transform="rotate(-180 20.5 10.5)"
              fill="white"
            />
            <circle
              cx="31"
              cy="28"
              r="6"
              transform="rotate(-180 31 28)"
              fill="white"
            />
          </svg>
        </div>
        <p
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: "78.4px",
          }}
        >
          Kickstart Your Career in Tech Today!
        </p>
        <p
          style={{
            fontSize: 18,
            fontWeight: 400,
            opacity: "80%",
            color: "#FFFFFF",
            textAlign: "center",
            width: "40%",
            lineHeight: "34px",
          }}
        >
          Learn Full Stack Engineering, Business Analysis, and Data Science with
          Industry Experts.
        </p>
        <Button
          style={{
            fontSize: 16,
            fontWeight: 500,
            backgroundColor: "#FFFFFF",
            borderRadius: "100px",
            width: "176px",
            height: "56px",
            color: "#0780FD",
          }}
        >
          Enrol now
        </Button>
      </div>

      <Footer />
    </div>
  );
}
