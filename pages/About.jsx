import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function About() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 400;
  const toRotate = ["I love to play basketball!"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

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

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

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
        <Container className="b-container">
          <Row className="row-col-container">
            <Col className="" xs={12} md={6} xl={7}>
              <h1>
                {`Hello, I'm Kenny Tran! `}
                <br />
                <span className="txt-rotate" dataperiod="1000">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
            </Col>
            <Col xs={12} md={6} xl={7}>
              <div className="kenny-shoot"></div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-banner2">
        <Container className="vb-container">
          <Row className="row-col-container2">
            <Col xs={12} md={6} xl={7}>
              <div className="kenny-spike left-trans"></div>
            </Col>
            <Col xs={12} md={6} xl={7}>
              <h1 className="right-trans">
                and I occassionally play volleyball as well
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-banner3">
        <Container className="friends-container">
          <Row className="row-col-container3">
            <div className="friends left-trans"></div>
            <h1 className="right-trans">
              but most importantly, I love all my friends and family to death.
            </h1>
            {/* <Col xs={12} md={6} xl={7}>
              <div className="friends"></div>
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className="text-banner">
        <Container className="text-container">
          <Row className="row-col-container4">
            <h1 className="opening">
              Leader. Obsessed. Coachable. Passionate.
            </h1>
            <br />
            <p className="para">
              I am a full stack software engineer that attended Hack
              Reactor/Galvanize for their 12 week coding bootcamp. As a result
              of being at the top of my class, I was selected to become one of
              the 4 SEIRS, or bootcamp mentors for the next round of students. I
              worked as a SEIR, teaching students full stack web development,
              computer science fundamentals, and javascript for the next few
              months.
            </p>
            <br />
            <p className="para">
              In my previous career, I was an unregistered veterinary technician
              striving to go to veterinary school for my doctorate's degree.
              Without having a certification for being a veterinary technician,
              I learned all of my skills quickly and efficiently on the job. I
              highly prioritize my client's experience by ensuring that the pet
              and pet owner are highly satisfied by effectively communicating
              and minimizing healthcare mistakes. As a result, I was able to
              increase the amounts of clients/day that the hospital could take
              by over 30% in the upcoming months. Similarly to my career in
              veterinary medicine, I have acquired my software engineering
              skills and learned technologies extremely efficiently and
              thoroughly.
            </p>
            <br />
            <p className="para">
              Currently, teh tech stack that I am most familiar with includes
              Javascript, React, Node.js, Express.js, Git, Github, Next.js and a
              variety of databases including MySQL, MongoDB, & PostgreSQL. I
              have experience with mobile development as I have created projects
              with React Native. I have lead teams by managing a codebase and
              approving pull requests after doing code reviews. I am confident
              in my skills to build a full stack website, scaling a large
              server, develop RESTful API's, create UX/UI designs, & grant
              additionals features such as but not limited to user
              authentication, cloud based image hosting, & cloud based
              deployment.
            </p>
            <br />
            <span className="closing">
              I strive to become the best software engineer I can become and
              will always strive to be smarter than I was yesterday.
            </span>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
