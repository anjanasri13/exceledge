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
import "../styles/about.css";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import img1 from "../assests/staricon.png";
import img2 from "../assests/crticon.png";
import img3 from "../assests/balicon.png";
import quote from "../assests/quote.png";
import dot1 from "../assests/dot1.png";
import dot2 from "../assests/dot2.png";
import dot3 from "../assests/dot3.png";
import dot4 from "../assests/dot4.png";
import fdot2 from "../assests/fdot2.png";
import fdot1 from "../assests/fdot1.png";
import dot5 from "../assests/dot5.png";

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

const testimonials = [
  {
    id: 1,
    name: "Sara",
    image: cimg,
    designation: "Full Stack",
    review:
      "Working with this team was an incredible experience! They provided excellent support, and their attention to detail is unmatched. The project was completed on time, and the final product exceeded our expectations.",
  },
  {
    id: 2,
    name: "Franklin",
    image: cimg2,
    designation: "Data Analysis",
    review:
      "I had the pleasure of working with this team, and I was impressed by their professionalism and expertise. The results were fantastic, and I couldn't be happier with the end product. They really understand how to deliver value.",
  },
  {
    id: 3,
    name: "Annie",
    image: cimg3,
    designation: "Full Stack",
    review:
      "An amazing experience! The lessons were clear, and the hands-on projects made a big difference. I feel more confident in my skills now. Definitely worth it! I feel fully prepared to take the next step in my career.",
  },
  {
    id: 4,
    name: "Sara",
    image: cimg,
    designation: "Full Stack",
    review:
      "This platform is truly revolutionary! It’s not only helped me improve my coding skills but also inspired me to create my own projects from scratch. I feel more confident than ever in my development abilities.",
  },
  {
    id: 5,
    name: "Franklin",
    image: cimg2,
    designation: "Data Analysis",
    review:
      "The resources available here are top-notch! The course material is easy to follow, and the hands-on exercises really helped me solidify my learning. This platform has been a game-changer for my career.",
  },
  {
    id: 6,
    name: "Annie",
    image: cimg3,
    designation: "Full Stack",
    review:
      "I can’t thank this platform enough for helping me boost my skills. The in-depth tutorials and the community of experts have truly accelerated my learning. I feel much more confident in my job now!",
  },
];

export default function About() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [leftArrowActive, setLeftArrowActive] = useState(false);

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
        <p className="cont-title">Welcome to ExcelEdge</p>
        <p className="cont-desc">
          Learn more about our mission, values, and the team dedicated to
          shaping the next generation of tech leaders.
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

      <div className="about-section">
        <img src={fdot1} alt="" className="Alayer1" />
        <img src={fdot2} alt="" className="Alayer2" />
        <div>
          <img src={image12} className="main-image" alt="" />
          <img src={image13} alt="" className="overlay-image" />
        </div>
        <div className="ab-con">
          <p className="about-text">About Us</p>
          <p className="about-sub-text">
            Join a vibrant learning community, gain hands-on experience, and
            take the next step toward a successful career.
          </p>
          <div className="benefits-list">
            <div className="benefits-item">
              <img src={img1} className="benefit-img" alt="" />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <p className="benefit-title">Rewards</p>
                <p className="benefit-description">
                  Learn from industry experts with real-world experience and
                  deep knowledge.
                </p>
              </div>
            </div>
            <div className="benefits-item">
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
            <div className="benefits-item">
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
      </div>

      <div className="a-main-container">
        <img src={dot5} alt="" className="Alayer3" />
        <img src={fdot2} alt="" className="Alayer4" />
        <div className="main-a-text">
          <p className="a-main-text-title">
            Build your Career and Upgrade Your Life
          </p>
          <p className="a-main-text-sub-title">
            Unlock endless possibilities with our comprehensive learning
            solutions. Gain industry-relevant skills, hands-on experience, and
            expert guidance to stay ahead in today's competitive world.
          </p>
          <p className="a-main-text-sub-title">
            Our mission is to empower you with the knowledge and confidence
            needed to achieve your career and personal growth goals.
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
        <div>
          <img src={image14} alt="cus" className="youtube-image" />
        </div>
      </div>

      <div className="academy-container">
        <img src={dot3} alt="" className="Clayer3" />
        <img src={fdot2} alt="" className="Clayer2" />
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
                  borderRadius: "20px",
                  backgroundColor: "#FFFFFF",
                  padding: "2% 1%",
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
                  borderRadius: "20px",
                  backgroundColor: "#FFFFFF",
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
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "4%",
          }}
        >
          <Button
            className="enroll-button"
            style={{
              backgroundColor: "#473FE1",
              borderRadius: "100px",
              color: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Enroll Now
          </Button>
        </div> */}
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
