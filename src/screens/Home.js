import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Button, Card } from "antd";
import Image1 from "../assests/Image1.png";
import Image2 from "../assests/Image2.png";
import Image3 from "../assests/Image3.png";
import Image4 from "../assests/Image4.png";
import Image5 from "../assests/Image5.jpg";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import languages from "../assests/languages.png";
import month from "../assests/month.png";
import clock from "../assests/clock.png";
import slots from "../assests/slots.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import calltoimg from "../assests/calltoimg.png";
import Gallery1 from "../assests/Gallery1.png";
import Gallery2 from "../assests/Gallery2.png";
import Gallery3 from "../assests/Gallery3.png";
import Gallery4 from "../assests/Gallery4.png";
import Gallery5 from "../assests/Gallery5.png";
import Gallery6 from "../assests/Gallery6.png";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import cimg from "../assests/cimg.png";
import cimg2 from "../assests/cimg2.png";
import cimg3 from "../assests/cimg3.png";
import CountUp from "react-countup";

const services = [
  {
    title: "Full Stack Engineering",
    description:
      "Master front-end & back-end development with React, Node.js, and databases.",
    icon: <img src={Image2} width="80px" height="80px" alt="" />,

    backgroundColor: "#377dff1a",
  },
  {
    title: "Business Analyst",
    description:
      "Gain skills in data analysis, market research, and business strategy.",
    icon: <img src={Image3} width="80px" height="80px" alt="" />,
    backgroundColor: "#FF9EC533",
  },
  {
    title: "Data Science",
    description:
      "Learn Python, machine learning, and AI to analyze and predict data trends.",
    icon: <img src={Image4} width="80px" height="80px" alt="" />,
    backgroundColor: "#FFCB2A24",
  },
];

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-arrow-left" onClick={onClick}>
      <IoIosArrowRoundBack />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="custom-arrow custom-arrow-right" onClick={onClick}>
      <IoIosArrowRoundForward />
    </button>
  );
};

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      <div className="main-div">
        <div className="layer1">
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
        <div className="layer2">
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
        <div className="main-text">
          <p className="main-text-title">Empowering Future Tech Leaders</p>
          <p className="main-text-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
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
            Enroll Now
          </Button>
        </div>

        <div className="customer-image-container">
          <img src={Image1} alt="cus" className="customer-image" />
        </div>
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

      <div className="about-us-container">
        <div className="layer7">
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
        <div className="layer8">
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
        <div>
          <img src={Image5} className="about-image" alt="" />
        </div>
        <div className="about-container">
          <p className="about-title">About Us</p>
          <p className="about-description">
            At Exceledge, we are dedicated to empowering learners with
            industry-relevant skills. Our expert-led courses in Full Stack
            Engineering, Business Analysis, and Data Science help you stay ahead
            in the ever-evolving tech landscape.
          </p>
          <p className="about-description">
            Join a vibrant learning community, gain hands-on experience, and
            take the next step toward a successful career.
          </p>
          <div>
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
              Enroll Now
            </Button>
          </div>
        </div>
      </div>

      <div className="why-choose-us-container">
        <div className="layer9">
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
        <div className="layer10">
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
        <div className="why-choose-text">
          <p className="why-choose-title">Why choose us</p>
          <p className="why-choose-description">
            At Exceledge, we are committed to providing top-notch education and
            career growth opportunities. Here's what sets us apart:
          </p>
          <div>
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
              Enroll Now
            </Button>
          </div>
        </div>

        <div>
          <div className="benefit-item">
            <img src={img1} className="benefit-img" alt="" />
            <div>
              <p className="benefit-title">Experienced instructors</p>
              <p className="benefit-description">
                Learn from industry experts with real-world experience and deep
                knowledge.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={img2} className="benefit-img" alt="" />
            <div>
              <p className="benefit-title">Job placement support</p>
              <p className="benefit-description">
                Get career guidance, resume building, and access to job
                opportunities with our dedicated placement support.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={img3} className="benefit-img" alt="" />
            <div>
              <p className="benefit-title">Industry-aligned curriculum</p>
              <p className="benefit-description">
                Stay ahead with courses designed to meet current industry
                demands and skill requirements.
              </p>
            </div>
          </div>
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

        <div className="batch-container">
          <div className="batch-header">
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

        <div className="batch-container">
          <div className="batch-header">
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

        <div className="batch-container">
          <div className="batch-header">
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
              height: "43px",
              color: "#FFFFFF",
            }}
          >
            View More
          </Button>
        </div>
      </div>

      <div className="demo-container">
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
          <p className="demo-title">Enroll your FREE Demo class</p>
          <p className="demo-description">
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

      <div className="Gallery-page">
        <div className="layer13">
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
          <p className="services-title">Students Work Activity</p>
          <p className="Gallery-sub-title">
            Our students engage in hands-on projects and real-world learning to
            build practical skills.
          </p>
        </div>
        <div className="gallery-images-row1">
          <img src={Gallery1} width="417px" height="356px" alt="" />
          <div className="gallery-images-column">
            <img src={Gallery2} width="368px" height="168px" alt="" />{" "}
            <img src={Gallery3} width="368px" height="168px" alt="" />
          </div>
          <img src={Gallery4} width="417px" height="356px" alt="" />
        </div>
        <div className="gallery-images-row2">
          <img src={Gallery5} width="610px" height="320px" alt="" />
          <img src={Gallery6} width="610px" height="320px" alt="" />
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="layer14">
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
        <div className="layer15">
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
        <p className="testimonials-heading">Testimonials!</p>
        <div style={{ margin: "0% 5%" }}>
          <Carousel
            dotListClass="custom-dots"
            showDots={!isDesktop}
            swipeable={true}
            customLeftArrow={isDesktop ? <CustomLeftArrow /> : null}
            customRightArrow={isDesktop ? <CustomRightArrow /> : null}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="carousel-item-padding"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 768,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 768,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={1}
          >
            <div className="testimonial-card1">
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
              <p className="testimonial-name">
                Working with this team was an incredible experience! They
                provided excellent support, and their attention to detail is
                unmatched. The project was completed on time, and the final
                product exceeded our expectations.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <img src={cimg} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Sara
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    Full Stack{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-card1">
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
              <p className="testimonial-name">
                I had the pleasure of working with this team, and I was
                impressed by their professionalism and expertise. The results
                were fantastic, and I couldn't be happier with the end product.
                They really understand how to deliver value.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <img src={cimg2} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Franklin
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    Data Analysis
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className="testimonial-card1">
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
              <p className="testimonial-name">
                An amazing experience! The lessons were clear, and the hands-on
                projects made a big difference. I feel more confident in my
                skills now. Definitely worth it! and I feel fully prepared to
                take the next step in my career.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <img src={cimg3} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Annie
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    Full Stack
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className="testimonial-card1">
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
              <p className="testimonial-name">
                This platform is truly revolutionary! It’s not only helped me
                improve my coding skills but also inspired me to create my own
                projects from scratch. I feel more confident than ever in my
                development abilities.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <img src={cimg} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Sara
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    Full Stack{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-card1">
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
              <p className="testimonial-name">
                The resources available here are top-notch! The course material
                is easy to follow, and the hands-on exercises really helped me
                solidify my learning. This platform has been a game-changer for
                my career.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <img src={cimg2} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Franklin
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    Data Analysis
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className="testimonial-card1">
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
              <p className="testimonial-name">
                I can’t thank this platform enough for helping me boost my
                skills. The in-depth tutorials and the community of experts have
                truly accelerated my learning. I feel much more confident in my
                job now!
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <img src={cimg3} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    Annie
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#ffffff",
                    }}
                  >
                    Full Stack
                  </p>
                </div>
              </div>{" "}
            </div>
          </Carousel>
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
            Find answers to common questions about our courses, enrollment, and
            more.
          </p>
          <Faq />
        </div>
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
