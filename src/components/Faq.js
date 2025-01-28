import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";

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
    fontSize: "20px",
    position: "absolute",
    right: "24px",
    transition: "transform 0.3s ease",
    transform: activeKey === key ? "rotate(0deg)" : "rotate(0deg)",
    backgroundColor: activeKey === key ? "#ffffff" : "#0780FD",
    color: activeKey === key ? "#0780FD" : "#fff",
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
                    01. Can i upgrade my class?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur. Dapibus velit neque
                    nec eleifend elementum phasellus viverra. Vitae non duis sem
                    augue sit at in turpis. Ut consequat integer in duis
                    laoreet.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header style={buttonStyle}>
                    <span style={getIconStyle("1")}>
                      {activeKey === "1" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    02. Can i upgrade my class?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur. Dapibus velit neque
                    nec eleifend elementum phasellus viverra. Vitae non duis sem
                    augue sit at in turpis. Ut consequat integer in duis
                    laoreet.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span style={getIconStyle("2")}>
                      {activeKey === "2" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    03. Can i upgrade my class?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur. Dapibus velit neque
                    nec eleifend elementum phasellus viverra. Vitae non duis sem
                    augue sit at in turpis. Ut consequat integer in duis
                    laoreet.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <span style={getIconStyle("3")}>
                      {activeKey === "3" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    04. Can i upgrade my class?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur. Dapibus velit neque
                    nec eleifend elementum phasellus viverra. Vitae non duis sem
                    augue sit at in turpis. Ut consequat integer in duis
                    laoreet.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <span style={getIconStyle("4")}>
                      {activeKey === "4" ? <HiMiniMinusSmall /> : <GoPlus />}
                    </span>
                    05. Can i upgrade my class?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur. Dapibus velit neque
                    nec eleifend elementum phasellus viverra. Vitae non duis sem
                    augue sit at in turpis. Ut consequat integer in duis
                    laoreet.
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
