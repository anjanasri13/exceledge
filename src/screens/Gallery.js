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
import Faq from "../components/Faq";
import { WiDayCloudy } from "react-icons/wi";
import dot1 from "../assests/dot1.png";
import dot2 from "../assests/dot2.png";
import dot3 from "../assests/dot3.png";
import dot4 from "../assests/dot4.png";
import fdot2 from "../assests/fdot2.png";
import fdot1 from "../assests/fdot1.png";

const images = [
  { id: 1, src: Gimg1, alt: "Image 1", width: "346px", height: "478px" },
  { id: 2, src: Gimg2, alt: "Image 2", width: "382px", height: "574px" },
  { id: 3, src: Gimg3, alt: "Image 3", width: "346px", height: "478px" },
  { id: 4, src: Gimg1, alt: "Image 4", width: "382px", height: "574px" },
  { id: 5, src: Gimg2, alt: "Image 5", width: "346px", height: "478px" },
  { id: 6, src: Gimg3, alt: "Image 6", width: "382px", height: "574px" },
  { id: 7, src: Gimg1, alt: "Image 7", width: "346px", height: "478px" },
  { id: 8, src: Gimg2, alt: "Image 8", width: "382px", height: "574px" },
  { id: 9, src: Gimg3, alt: "Image 9", width: "346px", height: "478px" },
  { id: 10, src: Gimg1, alt: "Image 10", width: "382px", height: "574px" },
];

export default function Gallery() {
  return (
    <div>
      <Header />
      <div className="hero-section">
        <img src={dot1} alt="" className="Glayer1" />
        <img src={dot2} alt="" className="Glayer2" />
        <img src={dot3} alt="" className="Conlayer3" />
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
          LEADING TRAINING CENTER
        </p>
        <p className="hero-title">
          Explore Our Academy – A Glimpse into Learning & Innovation!
        </p>
        <p className="hero-description">
          Step inside our vibrant learning environment, where knowledge meets
          creativity. From hands-on coding sessions to interactive workshops,
          experience what makes our academy unique.
        </p>
        <Button
          className="contact-btn"
          style={{
            backgroundColor: "#473FE1",
            borderRadius: "12px",
            color: "#FFFFFF",
          }}
        >
          Courses
        </Button>
      </div>

      <div className="service-container">
        <img src={dot3} alt="" className="Glayer3" />
        <img src={fdot2} alt="" className="Glayer4" />
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
          display: "flex",
          gap: 30,
          overflowX: "scroll",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          marginBottom: "10%",
        }}
        className="image-slider"
      >
        <div className="image-track">
          {[...images, ...images].map((image, index) => (
            <div
              key={image.id}
              style={{
                flex: "0 0 auto",
                marginTop: index % 2 === 0 ? "2%" : "0px",
              }}
              // className="hover-rotate"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="animated-image"
                style={{
                  width: image.width,
                  height: image.height,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="upcoming-batch">
        <img src={fdot1} alt="" className="Faqlayer1" />
        <img src={fdot2} alt="" className="Faqlayer2" />
        <div className="services-text">
          <p className="faq-title">FAQ</p>
          <p className="faq-sub-title">
            Find answers to common questions about our courses, enrollment, and
            more.
          </p>
          <Faq />
        </div>
      </div>

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
    </div>
  );
}
