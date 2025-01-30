import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Button, Card } from "antd";
import frame from "../assests/frame.png";
import frame1 from "../assests/frame1.png";
import frame2 from "../assests/frame2.png";
import frame11 from "../assests/frame11.png";
import frame12 from "../assests/frame12.png";
import frame13 from "../assests/frame13.png";
import frame14 from "../assests/frame14.png";
import frame15 from "../assests/frame15.png";
import frame16 from "../assests/frame16.png";
import image11 from "../assests/image11.png";
import image12 from "../assests/image12.png";
import image13 from "../assests/image13.png";
import image14 from "../assests/image14.png";
import cimg from "../assests/cimg.png";
import cimg2 from "../assests/cimg2.png";
import cimg3 from "../assests/cimg3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

import "../styles/about.css";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import CountUp from "react-countup";

const cardData = [
  {
    id: 1,
    image: frame11,
    title: "Hands-On Projects",
    subtitle:
      "We emphasize real-world projects that allow students to apply their knowledge and build a portfolio that stands out.",
  },
  {
    id: 2,
    image: frame12,
    title: "Industry-Driven Curriculum",
    subtitle:
      "Our courses are tailored to meet the demands of the tech industry, ensuring students learn the most relevant and up-to-date skills.",
  },
  {
    id: 3,
    image: frame13,
    title: "Expert Mentorship",
    subtitle:
      "Learn from seasoned professionals who bring years of industry experience and are dedicated to guiding you every step of the way.",
  },
  {
    id: 4,
    image: frame14,
    title: "Collaborative Learning Environment",
    subtitle:
      "We foster teamwork and networking through group activities, discussions, and peer-to-peer learning opportunities.",
  },
  {
    id: 5,
    image: frame15,
    title: "Flexible Learning Options",
    subtitle:
      "Choose from online, in-person, or hybrid classes to fit your schedule and learning preferences.",
  },
  {
    id: 6,
    image: frame16,
    title: "Job Placement Support",
    subtitle:
      "Gain access to career counseling, interview preparation, and placement assistance to launch your dream career in tech.",
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
export default function About() {
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

      <div
        style={{
          display: "flex",
          gap: 40,
        }}
      >
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
        <div className="a-main-text">
          <p className="a-main-text-title" style={{ fontSize: "" }}>
            Welcome to <span style={{ color: "#0780FD" }}>ExcelEdge</span>{" "}
          </p>
          <p className="a-main-text-sub-title">
            Learn more about our mission, values, and the team dedicated to
            shaping the next generation of tech leaders.
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
            Courses
          </Button>
        </div>

        <div className="customer-image-container">
          <img src={image11} alt="cus" className="customer-image" />
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

      <div
        style={{
          display: "flex",
          gap: "12%",
          marginTop: "17%",
          position: "relative",
        }}
      >
        <div className="Alayer1">
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
        <div className="Alayer2">
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
          <img
            src={image12}
            style={{
              width: 567,
              height: 548,
              borderRadius: 50,
              marginLeft: "5%",
              marginRight: "5%",
            }}
            alt=""
          />
          <img
            src={image13}
            alt=""
            style={{
              width: 307,
              height: 239,
              borderRadius: 50,
              position: "absolute",
              top: "-17%",
              left: "22%",
            }}
          />
        </div>
        <div>
          <div>
            <p className="about-text">About Us</p>
            <p className="about-sub-text">
              Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
              elementum cursus pellentesque velit.
            </p>
            <div style={{ marginTop: "5%", marginLeft: "6%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <img src={frame} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{
                      fontSize: 24,
                      fontWeight: 500,
                      color: "#1B1B1B",
                    }}
                  >
                    Experienced instructors
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#1B1B1B",
                      width: "70%",
                      opacity: "80%",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Fringilla mus enim
                    nisi velit.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <img src={frame1} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{ fontSize: 24, fontWeight: 500, color: "#1B1B1B" }}
                  >
                    Job placement support
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#1B1B1B",
                      width: "70%",
                      opacity: "80%",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Fringilla mus enim
                    nisi velit.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <img src={frame2} width="46px" height="46px" alt="" />
                <div>
                  <p
                    style={{ fontSize: 24, fontWeight: 500, color: "#1B1B1B" }}
                  >
                    Industry-aligned curriculum
                  </p>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#1B1B1B",
                      width: "70%",
                      opacity: "80%",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Fringilla mus enim
                    nisi velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: "10%",
          position: "relative",
        }}
      >
        <div className="Alayer3">
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
        <div className="Alayer4">
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
        <div className="a-main-text">
          <p className="a-main-text-title" style={{ fontSize: "" }}>
            Build your <span style={{ color: "#0780FD" }}>Career</span> And
            Upgrade <span style={{ color: "#0780FD" }}>Your Life</span>{" "}
          </p>
          <p className="a-main-text-sub-title">
            Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
            elementum cursus pellentesque velit. Lorem ipsum dolor sit amet
            consectetur. Fringilla mus enim nisi velit.
          </p>
          <p className="a-main-text-sub-title">
            Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
            elementum cursus pellentesque velit. Lorem ipsum dolor sit amet
            consectetur. Fringilla mus enim nisi velit.
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
          <img src={image14} alt="cus" className="youtube-image" />
        </div>
      </div>

      <div style={{ marginTop: "10%", position: "relative" }}>
        <div className="Alayer5">
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
        <div className="Alayer6">
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
        <p className="academy-text">Our Academy Way of Learning</p>
        <p className="academy-sub-text">
          Learn Full Stack Engineering, Business Analysis, and Data Science with
          Industry Experts.
        </p>
        <div className="card-container">
          <div className="card-container-1">
            {cardData.slice(0, 3).map((card) => (
              <Card
                key={card.id}
                style={{
                  width: "100%",
                  border: "2px solid #0780FD",
                  borderRadius: 20,
                }}
              >
                <div className="academy-card">
                  <img
                    className="card-image"
                    src={card.image}
                    alt={card.title}
                  />
                  <p className="card-title">{card.title}</p>
                  <p className="card-subtitle">{card.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="card-container-2">
            {cardData.slice(3, 6).map((card) => (
              <Card
                key={card.id}
                style={{
                  width: "100%",
                  border: "2px solid #0780FD",
                  borderRadius: 20,
                }}
              >
                <div className="academy-card">
                  <img
                    className="card-image"
                    src={card.image}
                    alt={card.title}
                  />
                  <p className="card-title">{card.title}</p>
                  <p className="card-subtitle">{card.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "4%",
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
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Enroll Now
          </Button>
        </div>
      </div>

      <div style={{ marginTop: "10%", position: "relative" }}>
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
                Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
                velit. Lorem ipsum dolor sit amet consectetur. Fringilla mus
                enim nisi velit. Lorem ipsum dolor sit amet consectetur.
                Fringilla mus enim nisi velit.
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
                Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
                velit. Lorem ipsum dolor sit amet consectetur. Fringilla mus
                enim nisi velit. Lorem ipsum dolor sit amet consectetur.
                Fringilla mus enim nisi velit.
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
                Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
                velit. Lorem ipsum dolor sit amet consectetur. Fringilla mus
                enim nisi velit. Lorem ipsum dolor sit amet consectetur.
                Fringilla mus enim nisi velit.
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
                Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
                velit. Lorem ipsum dolor sit amet consectetur. Fringilla mus
                enim nisi velit. Lorem ipsum dolor sit amet consectetur.
                Fringilla mus enim nisi velit.
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
                Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
                velit. Lorem ipsum dolor sit amet consectetur. Fringilla mus
                enim nisi velit. Lorem ipsum dolor sit amet consectetur.
                Fringilla mus enim nisi velit.
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
                Lorem ipsum dolor sit amet consectetur. Fringilla mus enim nisi
                velit. Lorem ipsum dolor sit amet consectetur. Fringilla mus
                enim nisi velit. Lorem ipsum dolor sit amet consectetur.
                Fringilla mus enim nisi velit.
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
