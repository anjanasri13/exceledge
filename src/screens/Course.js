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

const services = [
  {
    title: "Full Stack Engineering",
    description:
      "Master front-end & back-end development with React, Node.js, and databases.",
    icon: <img src={Image2} className="service-image" alt="" />,

    backgroundColor: "#377dff1a",
  },
  {
    title: "Business Analyst",
    description:
      "Gain skills in data analysis, market research, and business strategy.",
    icon: <img src={Image3} className="service-image" alt="" />,
    backgroundColor: "#FF9EC533",
  },
  {
    title: "Data Science",
    description:
      "Learn Python, machine learning, and AI to analyze and predict data trends.",
    icon: <img src={Image4} className="service-image" alt="" />,
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
        <div className="Clayer1">
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
        <div className="Clayer2">
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
        <p className="cont-title">
          Transform Your Career with Our Expert-Led Courses
        </p>
        <p className="cont-desc">
          Explore industry-aligned programs designed to prepare you for success
          in tech.
        </p>
        <Button
          className="contact-btn"
          style={{
            backgroundColor: "#473FE1",
            borderRadius: "100px",
            color: "#FFFFFF",
          }}
        >
          Courses
        </Button>
      </div>

      <div className="stats-grid" ref={statsRef}>
        <div className="layer3">
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
        <div className="Clayer5">
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
        <div className="Clayer6">
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
          <p className="services-title"> Explore Our Courses</p>
          <p className="services-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
        </div>
        <div className="services-card-container">
          {services.map((service, index) => (
            <Card key={index} className="services-card">
              <div className="card-image">{service.icon}</div>
              <div className="card-details">
                <p className="service-card-title">{service.title}</p>
                <p className="service-card-description">
                  {service.description}
                </p>
              </div>
              <Link className="learn-more-link">
                <div className="learn-more-container">
                  <span>Learn more</span>
                  <FaArrowRightLong className="fa-arrow-right-long" />
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      <div className="upcoming-batch">
        <div className="Clayer11">
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
        <div className="Clayer12">
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
          <p className="services-title">Upcoming Batches</p>
          <p className="services-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
        </div>

        <div className="batch-container">
          {/* <div
            style={{
              backgroundColor: "#473FE11F",
              borderRadius: "50%",
              width: "98px",
              height: "98px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 34,
                fontWeight: 500,
                color: "#473FE1",
                margin: 0,
              }}
            >
              06
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                margin: 0,
                color: "#473FE1",
              }}
            >
              Feb
            </p>
          </div> */}

          <div className="batch-header">
            <Button
              className="offl-btn"
              style={{
                backgroundColor: "#473FE11F",
                borderRadius: "10px",
                color: "#473FE1",
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
                borderRadius: "100px",
                color: "#FFFFFF",
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>

        <div className="batch-container">
          {/* <div
            style={{
              backgroundColor: "#473FE11F",
              borderRadius: "50%",
              width: "98px",
              height: "98px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 34,
                fontWeight: 500,
                color: "#473FE1",
                margin: 0,
              }}
            >
              06
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                margin: 0,
                color: "#473FE1",
              }}
            >
              Feb
            </p>
          </div> */}
          <div className="batch-header">
            <Button
              style={{
                fontSize: 18,
                fontWeight: 500,
                backgroundColor: "#473FE11F",
                borderRadius: "10px",
                width: "196px",
                height: "40px",
                color: "#473FE1",
                border: "none",
              }}
            >
              Offline Classroom
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
                borderRadius: "100px",
                color: "#FFFFFF",
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>

        <div className="batch-container">
          {/* <div
            style={{
              backgroundColor: "#473FE11F",
              borderRadius: "50%",
              width: "98px",
              height: "98px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 34,
                fontWeight: 500,
                color: "#473FE1",
                margin: 0,
              }}
            >
              06
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 300,
                margin: 0,
                color: "#473FE1",
              }}
            >
              Feb
            </p>
          </div> */}
          <div className="batch-header">
            <Button
              style={{
                fontSize: 18,
                fontWeight: 500,
                backgroundColor: "#473FE11F",
                borderRadius: "10px",
                width: "196px",
                height: "40px",
                color: "#473FE1",
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
                borderRadius: "100px",
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
          <Button
            className="view-btn"
            style={{
              backgroundColor: "#473FE1",
              borderRadius: "100px",
              color: "#FFFFFF",
            }}
          >
            View More
          </Button>
        </div>
      </div>

      <div className="demo-container">
        <div className="Clayer18">
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
        <div className="Clayer19">
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
              borderRadius: "100px",
              color: "#473FE1",
            }}
          >
            Book a seat
          </Button>
        </div>
        <div>
          <img src={calltoimg} alt="" className="call-img" />
        </div>
      </div>

      <div className="upcoming-batch">
        <div className="Clayer16">
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
        <div className="Clayer17">
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
          <p className="faq-title">FAQ</p>
          <p className="faq-sub-title">
            Find answers to common questions about our courses, enrollment, and
            more.
          </p>
          {/* <Faq /> */}
        </div>
      </div>

      <div className="cta-container">
        <div className="Clayer20">
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
        <div className="Clayer21">
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
