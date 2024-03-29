import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 400;
  const toRotate = ["Full Stack Engineer", "Web Developer", "UI/UX Designer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

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

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : "animate__animated animate__hinge"
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hello, I'm Kenny Tran! `}
                    <br />
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    My journey in software development emerged from my passion
                    of solving real-world problems with code. The web is used in
                    every corner of the world in the modern day. I want to
                    contribute towards developing tech to advance the industry
                    further than ever!
                  </p>
                  <a
                    href="https://www.linkedin.com/in/kennyytran95/"
                    target="_blank"
                    rel="noreferrer"
                    className="connect-slide"
                  >
                    <button
                      className="connect-btn"
                      onClick={() => console.log("connect")}
                    >
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInRight"
                      : "animate__animated animate__fadeOutRight"
                  }
                >
                  <img
                    src="/FB_IMG_1561366841295-removebg-preview.png"
                    className="hovering-icon"
                    alt="header-image"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};
