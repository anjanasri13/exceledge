import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Button, Card } from "antd";
import homeimg from "../assests/homeimg.png";
import "../styles/home1.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import serviceicon1 from "../assests/serviceicon1.png";
import serviceicon2 from "../assests/serviceicon2.png";
import serviceicon3 from "../assests/serviceicon3.png";
import whoimg from "../assests/whoimg.png";
import img1 from "../assests/staricon.png";
import img2 from "../assests/crticon.png";
import img3 from "../assests/balicon.png";
import languages from "../assests/languages.png";
import month from "../assests/month.png";
import clock from "../assests/clock.png";
import slots from "../assests/slots.png";
import { FaArrowRightLong } from "react-icons/fa6";
import calltoimg from "../assests/calltoimg.png";
import Gallery1 from "../assests/Gallery1.png";
import Gallery2 from "../assests/Gallery2.png";
import Gallery3 from "../assests/Gallery3.png";
import Gallery4 from "../assests/Gallery4.png";
import Gallery5 from "../assests/Gallery5.png";
import Gallery6 from "../assests/Gallery6.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import cimg from "../assests/cimg.png";
import cimg2 from "../assests/cimg2.png";
import cimg3 from "../assests/cimg3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import quote from "../assests/quote.png";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import fdot1 from "../assests/fdot1.png";
import fdot2 from "../assests/fdot2.png";
import dot1 from "../assests/dot1.png";
import dot2 from "../assests/dot2.png";
import dot3 from "../assests/dot3.png";
import dot4 from "../assests/dot4.png";

const testimonials = [
  {
    id: 1,
    name: "Franklin",
    image: cimg,
    designation: "Data Analysis",
    review:
      "Working with this team was an incredible experience! They provided excellent support, and their attention to detail is unmatched. The project was completed on time, and the final product exceeded our expectations.",
  },
  {
    id: 2,
    name: "Jessica",
    image: cimg2,
    designation: "User Experience Design",
    review:
      "I had the pleasure of working with this team, and I was impressed by their professionalism and expertise. The results were fantastic, and I couldn't be happier with the end product. They really understand how to deliver value.",
  },
  {
    id: 3,
    name: "Michael",
    image: cimg3,
    designation: "Product Management",
    review:
      "An amazing experience! The lessons were clear, and the hands-on projects made a big difference. I feel more confident in my skills now. Definitely worth it! I feel fully prepared to take the next step in my career.",
  },
  {
    id: 4,
    name: "Franklin",
    image: cimg,
    designation: "Data Analysis",
    review:
      "This platform is truly revolutionary! It’s not only helped me improve my coding skills but also inspired me to create my own projects from scratch. I feel more confident than ever in my development abilities.",
  },
  {
    id: 5,
    name: "Jessica",
    image: cimg2,
    designation: "User Experience Design",
    review:
      "The resources available here are top-notch! The course material is easy to follow, and the hands-on exercises really helped me solidify my learning. This platform has been a game-changer for my career.",
  },
  {
    id: 6,
    name: "Michael",
    image: cimg3,
    designation: "Product Management",
    review:
      "I can’t thank this platform enough for helping me boost my skills. The in-depth tutorials and the community of experts have truly accelerated my learning. I feel much more confident in my job now!",
  },
];

export default function Home1() {
  const [startCount, setStartCount] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);
  const [leftArrowActive, setLeftArrowActive] = useState(false);

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
  const services = [
    {
      title: "Full Stack Engineering",
      description:
        "Master front-end & back-end development with React, Node.js, and databases.",
      icon: <img src={serviceicon1} width="73px" height="73px" alt="" />,
    },
    {
      title: "Business Analyst",
      description:
        "Gain skills in data analysis, market research, and business strategy.",
      icon: <img src={serviceicon2} width="73px" height="73px" alt="" />,
    },
    {
      title: "Data Science",
      description:
        "Learn Python, machine learning, and AI to analyze and predict data trends.",
      icon: <img src={serviceicon3} width="73px" height="73px" alt="" />,
    },
  ];
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleNext = (onClick) => {
    setActiveIndex((prev) => {
      const newIndex = Math.min(prev + 1, testimonials.length - 1);
      if (newIndex > 0) setLeftArrowActive(true);
      return newIndex;
    });
    onClick();
  };

  const handlePrev = (onClick) => {
    setActiveIndex((prev) => {
      const newIndex = Math.max(prev - 1, 0);
      if (newIndex === 0) setLeftArrowActive(true);
      return newIndex;
    });
    onClick();
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        // className="custom-arrow custom-arrow-left"
        className={`custom-arrow custom-arrow-left ${
          leftArrowActive ? "active" : ""
        }`}
        // onClick={onClick}
        onClick={() => handlePrev(onClick)}
      >
        <IoIosArrowRoundBack />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        className="custom-arrow custom-arrow-right"
        // onClick={onClick}
        onClick={() => handleNext(onClick)}
      >
        <IoIosArrowRoundForward />
      </button>
    );
  };
  return (
    <div>
      <Header />

      <div className="main-div">
        <div className="main-text">
          <p
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "3px",
              color: " #F461A6",
            }}
          >
            LEADING TRAINING CENTER
          </p>
          <p className="main-text-title">Empowering Future Tech Leaders</p>
          <p className="main-text-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
          <div style={{ display: "flex", gap: 46, alignItems: "center" }}>
            <Button
              className="enroll-button"
              style={{
                backgroundColor: "#473FE1",
                borderRadius: "12px",
                color: "#FFFFFF",
              }}
            >
              Enroll Now
            </Button>
            <Link
              to=""
              style={{ fontSize: 16, fontWeight: 600, color: "#473FE1" }}
            >
              Get a Live Demo
            </Link>
          </div>

          <div className="stats-grid" ref={statsRef}>
            <div className="stat-item">
              <h4>
                <CountUp start={0} end={startCount ? 10 : 0} duration={2} />+
              </h4>
              <p>Skilled Trainers</p>
            </div>
            <div className="stat-item">
              <h4>
                <CountUp start={0} end={startCount ? 50 : 0} duration={2} />+
              </h4>
              <p>Students Enrolled</p>
            </div>{" "}
            <div className="stat-item">
              <h4>
                <CountUp start={0} end={startCount ? 100 : 0} duration={2} />+
              </h4>
              <p>Students Placed</p>
            </div>
            <div className="stat-item">
              <h4>
                <CountUp start={0} end={startCount ? 20 : 0} duration={2} />+
              </h4>
              <p>Workshop Conducted</p>
            </div>
          </div>
        </div>

        <div className="image-container-homeimg">
          <img src={dot1} alt="" className="Hlayer1" />
          <img src={dot2} alt="" className="Hlayer2" />
          <img src={dot3} alt="" className="Hlayer3" />
          <img src={dot4} alt="" className="Hlayer4" />
          <img src={homeimg} alt="cus" className="home-image" />
        </div>
      </div>

      <div className="services-page">
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
              <div className="services-card-image">{service.icon}</div>
              <div className="services-card-details">
                <p className="service-card-title">{service.title}</p>
                <p className="service-card-description">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div
        style={{
          margin: "0 5%",
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          position: "relative",
        }}
      >
        <img src={fdot1} alt="" className="Alayer1" />
        <img src={fdot2} alt="" className="Alayer2" />{" "}
        <img src={dot3} alt="" className="Hlayer5" />
        <div style={{ width: "50%", flexShrink: 0 }}>
          <img src={whoimg} alt="" width="100%" height="630px" />
        </div>
        <div
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: 36,
              fontWeight: 700,
              lineHeight: "44px",
              color: "#141F39",
            }}
          >
            Who we are
          </p>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "160%",
              color: "#5D6C7C",
            }}
          >
            Class aptent taciti sociosqu ad litora torquen conubia nostramase
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem. Class
            aptent taciti sociosqu ad litora torquen conubia nostramase inceptos
            himenaeo. Phasellus metus nisl euismod eget lorem.Class aptent
            taciti sociosqu ad litora torquen conubia nostramase inceptos
            himenaeo. Phasellus metus nisl euismod eget lorem{" "}
          </p>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "160%",
              color: "#5D6C7C",
            }}
          >
            Class aptent taciti sociosqu ad litora torquen conubia nostramase
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem.Class
            aptent taciti sociosqu ad litora torquen conubia nostramase inceptos
            himenaeo. Phasellus metus nisl euismod eget lorem.
          </p>
          <Button
            className="enroll-button"
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

      <div className="why-choose-us-container">
        <div className="why-choose-text">
          <p className="why-choose-title">Why choose us</p>
          <p className="why-choose-description">
            Class aptent taciti sociosqu ad litora torquen conubia nostramase
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem. Class
            aptent taciti sociosqu ad litora torquen conubia nostramase inceptos
            himenaeo. Phasellus metus nisl euismod eget lorem.Class aptent
            taciti sociosqu ad litora torquen conubia nostramase inceptos
            himenaeo. Phasellus metus nisl euis
          </p>
          <p className="why-choose-description">
            Class aptent taciti sociosqu ad litora torquen conubia nostramase
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem.Class
            aptent taciti sociosqu ad litora torquen conubia nostramase inceptos
            himenaeo. Phasellus metus nisl euismod eget lorem.
          </p>
          <div>
            <Button
              className="enroll-button"
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

        <div className="benefits-list">
          <div className="benefit-item">
            <img src={img1} className="benefit-img" alt="" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p className="benefit-title">Rewards</p>
              <p className="benefit-description">
                Learn from industry experts with real-world experience and deep
                knowledge.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={img2} className="benefit-img" alt="" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p className="benefit-title">100% Secured</p>
              <p className="benefit-description">
                Get career guidance, resume building, and access to job
                opportunities with our dedicated placement support.
              </p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={img3} className="benefit-img" alt="" />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p className="benefit-title">Balance Transfer</p>
              <p className="benefit-description">
                Stay ahead with courses designed to meet current industry
                demands and skill requirements.
              </p>
            </div>
          </div>
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

      <div className="Gallery-page">
        <img src={fdot1} alt="" className="Hlayer6" />
        <img src={fdot2} alt="" className="Clayer2" />
        <div className="services-text">
          <p className="services-title">Students Work Activity</p>
          <p className="Gallery-sub-title">
            Learn Full Stack Engineering, Business Analysis, and Data Science
            with Industry Experts.
          </p>
        </div>
        <div className="gallery-images-row1">
          <img src={Gallery1} alt="" className="Gimg1" />
          <div className="gallery-images-column">
            <img src={Gallery2} alt="" className="Gimg2" />
            <img src={Gallery3} className="Gimg2" alt="" />
          </div>
          <img src={Gallery4} className="Gimg3" alt="" />
        </div>
        <div className="gallery-images-row2">
          <img src={Gallery5} alt="" className="Gimg4" />
          <img src={Gallery6} alt="" className="Gimg4" />
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <p className="testimonials-heading">Testimonials</p>
        <div style={{ margin: "-7% 4% 10%" }}>
          <Carousel
            dotListClass="custom-dots"
            showDots={isDesktop === false}
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
            beforeChange={(nextSlide) => {
              setActiveIndex(nextSlide);
              if (nextSlide > 0) setLeftArrowActive(true); // Ensure left arrow turns blue after moving right
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card1">
                <img src={quote} alt="quote" width="44px" height="36px" />
                <p className="testimonial-review">{testimonial.review}</p>
                <div style={{ display: "flex", gap: 12 }}>
                  <img
                    src={testimonial.image}
                    width="46px"
                    height="46px"
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-description">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
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
