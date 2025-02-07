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
        <div className="Glayer1">
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
        <div className="Glayer2">
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
        <p className="hero-title">
          Explore Our Academy – A Glimpse into Learning & Innovation!
        </p>
        <p className="hero-description">
          Step inside our vibrant learning environment, where knowledge meets
          creativity. From hands-on coding sessions to interactive workshops,
          experience what makes our academy unique.
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
            <circle cx="29" cy="8" r="8" fill="#473FE1" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#473FE1" />
            <circle cx="6" cy="14" r="6" fill="#473FE1" />
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
        <div className="Glayer20">
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
        <div className="Glayer21">
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
        <p className="cta-title">Kickstart Your Career In Tech Today!</p>
        <p className="cta-subtitle">
          Learn Full Stack Engineering, Business Analysis, and Data Science with
          Industry Experts.
        </p>
        <Button
          className="enroll-button"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "100px",
            color: "#473FE1",
          }}
        >
          Enrol now
        </Button>
      </div>

      <Footer />
    </div>
  );
}
