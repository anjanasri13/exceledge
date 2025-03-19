import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import "../styles/Faq.css";

export default function Faq() {
  const [activeKey, setActiveKey] = useState("0");

  const handleSelect = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const buttonStyle = {
    position: "relative",
    fontSize: "20px",
  };

  const getIconStyle = (key) => ({
    fontSize: "25px",
    position: "absolute",
    right: "24px",
    transition: "transform 0.3s ease",
    transform: activeKey === key ? "rotate(0deg)" : "rotate(0deg)",
    backgroundColor: activeKey === key ? "#ffffff" : "#ffffff",
    color: activeKey === key ? "#473FE1" : "#473FE1",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div className="faq-content">
      {/* <div className="layer18">
        <svg
          width="56"
          height="59"
          viewBox="0 0 56 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M55.0752 13.9594V58.1499H11.075L55.0752 13.9594Z"
              stroke="#383838"
              stroke-miterlimit="10"
            />
            <path
              d="M27.5753 0.149996V27.769H0.0751953L27.5753 0.149996Z"
              fill="#FF9EC5"
            />
          </g>
        </svg>
      </div>
      <div className="layer19">
        <svg
          width="101"
          height="115"
          viewBox="0 0 101 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6">
            <path
              d="M84.246 16.8289C106.578 39.1613 106.588 75.3735 84.2554 97.7045L3.36902 16.8181C25.7028 -5.51296 61.9149 -5.50349 84.246 16.8289Z"
              fill="#FFCB2A"
            />
            <path
              d="M81.877 32.8475C104.209 55.1799 104.219 91.3921 81.8864 113.723L1 32.8381C23.3338 10.5057 59.5459 10.5151 81.877 32.8475Z"
              stroke="#377DFF"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div> */}

      <section className="section faq_section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-6">
              <Accordion
                defaultActiveKey="0"
                activeKey={activeKey}
                onSelect={handleSelect}
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={buttonStyle}>
                    <span style={getIconStyle("0")}>
                      {activeKey === "0" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    1. Can I upgrade my class?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, you can upgrade your class based on seat availability
                    and meeting the required eligibility criteria. Please
                    contact the support team for more details.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header style={buttonStyle}>
                    <span style={getIconStyle("1")}>
                      {activeKey === "1" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    2. What is the refund policy?
                  </Accordion.Header>
                  <Accordion.Body>
                    We offer a refund within the first 7 days of enrollment.
                    After this period, refunds are not provided. Please review
                    our refund policy for specific details.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span style={getIconStyle("2")}>
                      {activeKey === "2" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    3. How can I access the course materials?
                  </Accordion.Header>
                  <Accordion.Body>
                    Course materials are available in your student dashboard
                    after enrollment. You can download and access the resources
                    at any time.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span style={getIconStyle("3")}>
                      {activeKey === "3" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    4. Do you provide certificates upon course completion?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, all successfully completed courses come with a verified
                    digital certificate.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span style={getIconStyle("4")}>
                      {activeKey === "4" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    5. Can I take multiple courses at the same time?
                  </Accordion.Header>
                  <Accordion.Body>
                    Absolutely! We encourage learners to take multiple courses
                    based on their interest and availability
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
