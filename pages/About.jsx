import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="md" className="about-navbar">
        <Container className="navbar-container">
          <Navbar.Brand href="/">
            <img src="/kt_no_bg.png" className="kt_logo" alt="Logo" />
          </Navbar.Brand>
          <h1>About Me</h1>
          <div className="about-social-icons">
            <a
              href="https://www.linkedin.com/in/kennyytran95/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/nav-icon1.svg" alt="linkedIn" />
            </a>
            <a
              href="https://github.com/kennytran95"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="faIconHover" />
            </a>
            <a
              href="https://www.instagram.com/kennyy_tran/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/nav-icon3.svg" alt="instagram" />
            </a>
          </div>
        </Container>
      </Navbar>
      <section className="about-banner">
        <Container>
          <Row className="row-col-container">
            <Col xs={12} md={6} xl={7}>
              <h1>
                {`Hello, I'm Kenny Tran! `}
                <br />
                <span
                  className="txt-rotate"
                  dataperiod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">I love to trick</span>
                </span>
              </h1>
            </Col>
            <Col xs={12} md={6} xl={7}>
              <img src="/kenny spike.jpg" className="kenny-spike" alt="Logo" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
