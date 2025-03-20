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
