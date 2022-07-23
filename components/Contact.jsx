import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: formDetails,
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully" });
        console.log(response.data);
      }
    } catch (err) {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
      console.error(err);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__rotateIn"
                      : "animate__rotateOut"
                  }
                >
                  <img src="/contact-img.svg" alt="contact image" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lasttName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
                <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <div
                        className={
                          isVisible
                            ? "animate__animated animate__backInRight"
                            : "animate__animated animate__backOutRight"
                        }
                      >
                        <img
                          src="/code guy.png"
                          className="code_guy"
                          alt="contact image"
                        />
                      </div>
                    )}
                  </TrackVisibility>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
