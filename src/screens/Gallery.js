import React from "react";
import Header from "../components/Header";
import { Button } from "antd";
import Footer from "../components/Footer";
import Gimg1 from "../assests/Gimg1.png";
import Gimg2 from "../assests/Gimg2.png";
import Gimg3 from "../assests/Gimg3.png";
import Gimg4 from "../assests/Gimg4.png";
import Gimg5 from "../assests/Gimg5.png";
import Gimg6 from "../assests/Gimg6.png";
import Gimg7 from "../assests/Gimg7.png";
import Gimg8 from "../assests/Gimg8.png";
import Gimg9 from "../assests/Gimg9.png";
import "../styles/Gallery.css";

const images = [
  { id: 1, src: Gimg1, alt: "Image 1" },
  { id: 2, src: Gimg2, alt: "Image 2" },
  { id: 3, src: Gimg3, alt: "Image 3" },
  { id: 4, src: Gimg4, alt: "Image 4" },
  { id: 5, src: Gimg5, alt: "Image 5" },
  { id: 6, src: Gimg6, alt: "Image 6" },
  { id: 7, src: Gimg7, alt: "Image 6" },
  { id: 8, src: Gimg8, alt: "Image 6" },
  { id: 8, src: Gimg7, alt: "Image 6" },
  { id: 9, src: Gimg9, alt: "Image 6" },
];

export default function Gallery() {
  return (
    <div>
      <Header />
      <div className="hero-section">
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
        <p className="hero-title">
          Transform Your Career with Our Expert-Led Courses
        </p>
        <p className="hero-description">
          Explore industry-aligned programs designed to prepare you for success
          in tech.
        </p>
      </div>

      <div className="service-container">
        <div className="Glayer3">
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
        <div className="Glayer4">
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

      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="cta-container">
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
        <p className="cta-title">Kickstart Your Career in Tech Today!</p>
        <p className="cta-subtitle">
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
