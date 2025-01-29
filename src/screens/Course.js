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
      "Lorem ipsum dolor sit amet consectetur. Proin ipsum vitae proin dui sed risus morbi.",
    icon: <img src={Image2} width="80px" height="80px" alt="" />,

    backgroundColor: "#377dff1a",
  },
  {
    title: "Business Analyst",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin ipsum vitae proin dui sed risus morbi.",
    icon: <img src={Image3} width="80px" height="80px" alt="" />,
    backgroundColor: "#FF9EC533",
  },
  {
    title: "Data Science",
    description:
      "Lorem ipsum dolor sit amet consectetur. Proin ipsum vitae proin dui sed risus morbi.",
    icon: <img src={Image4} width="80px" height="80px" alt="" />,
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
            width: "50%",
            textAlign: "center",
          }}
        >
          Explore industry-aligned programs designed to prepare you for success
          in tech.
        </p>
        <Button
          style={{
            fontSize: 16,
            fontWeight: 500,
            backgroundColor: "#0780FD",
            borderRadius: "100px",
            width: "156px",
            height: "56px",
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
            <circle cx="29" cy="8" r="8" fill="#0780FD" />
            <circle cx="16.5" cy="31.5" r="10.5" fill="#0780FD" />
            <circle cx="6" cy="14" r="6" fill="#0780FD" />
          </svg>
        </div>
        <div className="layer4">
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
        <div className="layer5">
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
        <div className="layer6">
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginTop: "5%",
                }}
              >
                <p className="service-card-title">{service.title}</p>
                <p className="service-card-description">
                  {service.description}
                </p>
              </div>
              <Link
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span>Learn more</span>
                  <FaArrowRightLong className="fa-arrow-right-long" />
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      <div className="upcoming-batch">
        <div className="layer11">
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
        <div className="layer12">
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
          <p className="services-title">Upcoming Batches</p>
          <p className="services-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
        </div>

        <div
          style={{
            borderRadius: "130px",
            border: "2px solid #0780FD",
            marginRight: "8%",
            marginLeft: "8%",
            padding: "2% 0%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Button
              style={{
                fontSize: 18,
                fontWeight: 500,
                backgroundColor: "#0780FD1F",
                borderRadius: "10px",
                width: "196px",
                height: "40px",
                color: "#0780FD",
                border: "none",
              }}
            >
              Offline Classroom
            </Button>
            <p style={{ fontSize: 24, fontWeight: 500 }}>
              Full Stack Engineering
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <img
                  src={month}
                  alt=""
                  style={{
                    color: "#1B1B1B",
                    width: "38px",
                    height: "38px",
                  }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  03 Months
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <img
                  src={languages}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  Tamil & English
                </p>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  justifyContent: "center",
                }}
              >
                <img
                  src={clock}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  10:00 AM - 1:00 PM
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  src={slots}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  Slots left - <span style={{ fontWeight: 600 }}>05</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <Button
              style={{
                fontSize: 16,
                fontWeight: 500,
                backgroundColor: "#0780FD",
                borderRadius: "100px",
                width: "176px",
                height: "43px",
                color: "#FFFFFF",
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>

        <div
          style={{
            borderRadius: "130px",
            border: "2px solid #0780FD",
            marginRight: "8%",
            marginLeft: "8%",
            padding: "2% 0%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Button
              style={{
                fontSize: 18,
                fontWeight: 500,
                backgroundColor: "#0780FD1F",
                borderRadius: "10px",
                width: "196px",
                height: "40px",
                color: "#0780FD",
                border: "none",
              }}
            >
              Offline Classroom
            </Button>
            <p style={{ fontSize: 24, fontWeight: 500 }}>Business Analyst</p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <img
                  src={month}
                  alt=""
                  style={{
                    color: "#1B1B1B",
                    width: "38px",
                    height: "38px",
                  }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  03 Months
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <img
                  src={languages}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  Tamil & English
                </p>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  justifyContent: "center",
                }}
              >
                <img
                  src={clock}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  10:00 AM - 1:00 PM
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  src={slots}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  Slots left - <span style={{ fontWeight: 600 }}>05</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <Button
              style={{
                fontSize: 16,
                fontWeight: 500,
                backgroundColor: "#0780FD",
                borderRadius: "100px",
                width: "176px",
                height: "43px",
                color: "#FFFFFF",
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>

        <div
          style={{
            borderRadius: "130px",
            border: "2px solid #0780FD",
            marginRight: "8%",
            marginLeft: "8%",
            padding: "2% 0%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Button
              style={{
                fontSize: 18,
                fontWeight: 500,
                backgroundColor: "#0780FD1F",
                borderRadius: "10px",
                width: "196px",
                height: "40px",
                color: "#0780FD",
                border: "none",
              }}
            >
              Offline Classroom
            </Button>
            <p style={{ fontSize: 24, fontWeight: 500 }}>Data Science</p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <img
                  src={month}
                  alt=""
                  style={{
                    color: "#1B1B1B",
                    width: "38px",
                    height: "38px",
                  }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  03 Months
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <img
                  src={languages}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  Tamil & English
                </p>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  justifyContent: "center",
                }}
              >
                <img
                  src={clock}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  10:00 AM - 1:00 PM
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                  src={slots}
                  alt=""
                  style={{ color: "#1B1B1B", width: "38px", height: "38px" }}
                />
                <p style={{ fontSize: 18, fontWeight: 400, marginBottom: 0 }}>
                  Slots left - <span style={{ fontWeight: 600 }}>05</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <Button
              style={{
                fontSize: 16,
                fontWeight: 500,
                backgroundColor: "#0780FD",
                borderRadius: "100px",
                width: "176px",
                height: "43px",
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
            style={{
              fontSize: 16,
              fontWeight: 500,
              backgroundColor: "#0780FD",
              borderRadius: "100px",
              width: "176px",
              height: "56px",
              color: "#FFFFFF",
            }}
          >
            View More
          </Button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#0780FD",
          borderRadius: "80px",
          margin: "8%",
          padding: "5%",
          display: "flex",
          position: "relative",
        }}
      >
        <div className="layer18">
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
        <div className="layer19">
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
        <div>
          <Button
            style={{
              fontSize: 18,
              fontWeight: 500,
              backgroundColor: "#FFFFFF1A",
              borderRadius: "10px",
              width: "187px",
              height: "40px",
              color: "#FFFFFF",
            }}
          >
            Free Demo Class
          </Button>
          <p
            style={{
              fontSize: 49,
              fontWeight: 600,
              color: "#FFFFFF",
              width: "70%",
              lineHeight: "68.6px",
            }}
          >
            Enroll your FREE Demo class
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              opacity: "80%",
              color: "#FFFFFF",
              width: "70%",
              lineHeight: "34px",
            }}
          >
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
          <Button
            style={{
              fontSize: 16,
              fontWeight: 500,
              backgroundColor: "#FFFFFF",
              borderRadius: "100px",
              width: "189px",
              height: "56px",
              color: "#0780FD",
            }}
          >
            Book a seat
          </Button>
        </div>
        <div>
          <img src={calltoimg} width="557px" height="370px" alt="" />
        </div>
      </div>

      <div className="upcoming-batch">
        <div className="layer16">
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
        <div className="layer17">
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
          <p className="faq-title">FAQ</p>
          <p className="faq-sub-title">
            Lorem ipsum dolor sit amet consectetur. Adipiscing duis lobortis
            pulvinar sit neque massa mauris.
          </p>
          <Faq />
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
