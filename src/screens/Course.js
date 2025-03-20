import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Button, Card, Carousel } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import Image2 from "../assests/Image2.png";
import Image3 from "../assests/Image3.png";
import Image4 from "../assests/Image4.png";
import { Link } from "react-router-dom";
import languages from "../assests/languages.png";
import month from "../assests/month.png";
import clock from "../assests/clock.png";
import slots from "../assests/slots.png";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import calltoimg from "../assests/calltoimg.png";
import "../styles/course.css";
import CountUp from "react-countup";
import fdot2 from "../assests/fdot2.png";
import fdot1 from "../assests/fdot1.png";
import dot1 from "../assests/dot1.png";
import dot2 from "../assests/dot2.png";
import dot3 from "../assests/dot3.png";
import dot4 from "../assests/dot4.png";

const services = [
  {
    title: "Full Stack Engineering",
    description:
      "Master front-end & back-end development with React, Node.js, and databases.",
    icon: <img src={Image2} className="courseservices-card-image" alt="" />,

    backgroundColor: "#377dff1a",
  },
  {
    title: "Business Analyst",
    description:
      "Gain skills in data analysis, market research, and business strategy.",
    icon: <img src={Image3} className="courseservices-card-image" alt="" />,
    backgroundColor: "#FF9EC533",
  },
  {
    title: "Data Science",
    description:
      "Learn Python, machine learning, and AI to analyze and predict data trends.",
    icon: <img src={Image4} className="courseservices-card-image" alt="" />,
    backgroundColor: "#FFCB2A24",
  },
];

export default function Course() {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
          } else {
            setStartCount(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="hero-section">
        <img src={dot1} alt="" className="Glayer1" />
        <img src={dot2} alt="" className="Conlayer2" />
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
        <p className="cont-title">
          Transform Your Career With Our Expert-Led Courses
        </p>
        <p className="cont-desc">
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
          Courses
        </Button>
      </div>

      <div className="course-stats-grid" ref={statsRef}>
        <div className="stat-item">
          <h4>
            <CountUp start={0} end={startCount ? 10 : 0} duration={2} />+
          </h4>
          <p>Skilled Trainers</p>
        </div>
        <div className="stat-item">
          <h4>
            <CountUp start={0} end={startCount ? 100 : 0} duration={2} />+
          </h4>
          <p>Students Placed</p>
        </div>
        <div className="stat-item">
          <h4>
            <CountUp start={0} end={startCount ? 50 : 0} duration={2} />+
          </h4>
          <p>Students Enrolled</p>
        </div>
        <div className="stat-item">
          <h4>
            <CountUp start={0} end={startCount ? 20 : 0} duration={2} />+
          </h4>
          <p>Workshop Conducted</p>
        </div>
      </div>

      <div className="services-page">
        <img src={dot3} alt="" className="Clayer1" />
        <img src={fdot2} alt="" className="Clayer2" />
        <div className="services-text">
          <p className="services-title"> Explore Our Courses</p>
          <p className="services-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
        </div>
        <div className="services-card-container">
          {services.map((service, index) => (
            <Card key={index} className="services-card">
              <div className="courseservices-card-image">{service.icon}</div>
              <div className="courseservices-card-details">
                <p className="courseservices-card-title">{service.title}</p>
                <p className="courseservices-card-description">
                  {service.description}
                </p>
              </div>
              {/* <Link className="learn-more-link">
                <div className="learn-more-container">
                  <span>Learn more</span>
                  <FaArrowRightLong className="fa-arrow-right-long" />
                </div>
              </Link> */}
            </Card>
          ))}
        </div>
      </div>

      <div className="upcoming-batch">
        <img src={dot3} alt="" className="Clayer3" />
        <img src={fdot2} alt="" className="Clayer2" />
        <div className="services-text">
          <p className="services-title">Upcoming Batches</p>
          <p className="services-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
        </div>
        <div className="upcoming-batch-container">
          <div className="batch-header">
            <Button
              className="offl-btn"
              style={{
                backgroundColor: "#D6F2E5",
                borderRadius: "10px",
                color: "#1B7A4D",
                border: "none",
              }}
            >
              Offline Classroom
            </Button>
            <p className="course-title">Full Stack Engineering</p>
          </div>

          <div className="batch-details">
            <div>
              <div className="info-item">
                <img src={month} alt="" className="info-icon" />
                <p className="info-text">03 Months</p>
              </div>
              <div className="info-item">
                <img src={languages} alt="" className="info-icon" />
                <p className="info-text">Tamil & English</p>
              </div>
            </div>

            <div>
              <div className="batch-info">
                <img src={clock} alt="" className="info-icon" />
                <p s className="info-text">
                  10:00 AM - 1:00 PM
                </p>
              </div>
              <div className="info-item">
                <img src={slots} alt="" className="info-icon" />
                <p className="info-text">
                  Slots left - <span className="slots-left">05</span>
                </p>
              </div>
            </div>
          </div>

          <div className="form-button-container">
            <Button
              className="enroll-btn"
              style={{
                backgroundColor: "#473FE1",
                borderRadius: "12px",
                color: "#FFFFFF",
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="upcoming-batch-container">
          <div className="batch-header">
            <Button
              className="offl-btn"
              style={{
                backgroundColor: "#FDE9F3",
                borderRadius: "10px",
                color: "#F461A6",
                border: "none",
              }}
            >
              Online Classroom
            </Button>
            <p className="course-title">Business Analyst</p>
          </div>

          <div className="batch-details">
            <div>
              <div className="info-item">
                <img src={month} alt="" className="info-icon" />
                <p className="info-text">03 Months</p>
              </div>
              <div className="info-item">
                <img src={languages} alt="" className="info-icon" />
                <p className="info-text">Tamil & English</p>
              </div>
            </div>

            <div>
              <div className="batch-info">
                <img src={clock} alt="" className="info-icon" />
                <p s className="info-text">
                  10:00 AM - 1:00 PM
                </p>
              </div>
              <div className="info-item">
                <img src={slots} alt="" className="info-icon" />
                <p className="info-text">
                  Slots left - <span className="slots-left">05</span>
                </p>
              </div>
            </div>
          </div>

          <div className="form-button-container">
            <Button
              className="enroll-btn"
              style={{
                backgroundColor: "#473FE1",
                borderRadius: "12px",
                color: "#FFFFFF",
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="upcoming-batch-container">
          <div className="batch-header">
            <Button
              className="offl-btn"
              style={{
                backgroundColor: "#D6F2E5",
                borderRadius: "10px",
                color: "#1B7A4D",
                border: "none",
              }}
            >
              Offline Classroom
            </Button>
            <p className="course-title">Data Science</p>
          </div>

          <div className="batch-details">
            <div>
              <div className="info-item">
                <img src={month} alt="" className="info-icon" />
                <p className="info-text">03 Months</p>
              </div>
              <div className="info-item">
                <img src={languages} alt="" className="info-icon" />
                <p className="info-text">Tamil & English</p>
              </div>
            </div>

            <div>
              <div className="batch-info">
                <img src={clock} alt="" className="info-icon" />
                <p s className="info-text">
                  10:00 AM - 1:00 PM
                </p>
              </div>
              <div className="info-item">
                <img src={slots} alt="" className="info-icon" />
                <p className="info-text">
                  Slots left - <span className="slots-left">05</span>
                </p>
              </div>
            </div>
          </div>

          <div className="form-button-container">
            <Button
              className="enroll-btn"
              style={{
                backgroundColor: "#473FE1",
                borderRadius: "12px",
                color: "#FFFFFF",
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            style={{
              color: "#473FE1",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            <div className="learn-more-container">
              <span>View More</span>{" "}
              <FaArrowRightLong className="fa-arrow-right-long" />
            </div>
          </Link>
        </div>
      </div>

      <div className="demo-container">
        <div className="demo">
          <Button
            className="free-demo"
            style={{
              backgroundColor: "#FFFFFF1A",
              borderRadius: "10px",
              color: "#FFFFFF",
              borderStyle: "none",
            }}
          >
            Free Demo Class
          </Button>
          <p className="demo-title">Enroll your FREE Demo class</p>
          <p className="demo-description">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
          <Button
            className="book-seat"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              color: "#473FE1",
            }}
          >
            Book a seat
          </Button>
        </div>
        <div>
          <img src={calltoimg} className="call-img" alt="" />
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
