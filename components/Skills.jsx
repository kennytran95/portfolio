import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__rollIn"
                      : "animate__animated animate__rollOut"
                  }
                >
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      Over the last year, I have developed my skills by working
                      on teams with many software engineers.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      showDots={true}
                      className="skill-slider"
                      autoPlay={true}
                      autoPlaySpeed={2250}
                    >
                      <div className="item">
                        <img src="/nextjs.svg" alt="image" />
                        <h5>Full Stack Engineering</h5>
                      </div>
                      <div className="item">
                        <img src="/picture.svg" alt="image" />
                        <h5>UI/UX Design</h5>
                      </div>
                      <div className="item">
                        <img src="/cloud faang.svg" alt="image" />
                        <h5>Database Management</h5>
                      </div>
                      <div className="item">
                        <img src="/geolocation.svg" alt="image" />
                        <h5>Restful API</h5>
                      </div>
                      <div className="item">
                        <img src="/authentication.svg" alt="image" />
                        <h5>Authentication</h5>
                      </div>
                      <div className="item">
                        <img src="/debug.svg" alt="image" />
                        <h5>Code Reviews & Debugging</h5>
                      </div>
                      <div className="item">
                        <img src="/portfolio.svg" alt="image" />
                        <h5>Web Development</h5>
                      </div>
                      <div className="item">
                        <img src="/mobile dev.svg" alt="image" />
                        <h5>Mobile Development</h5>
                      </div>
                      <div className="item">
                        <img src="/cloud hosting.svg" alt="image" />
                        <h5>Deployment - AWS/Heroku/Vercel</h5>
                      </div>
                      <div className="item">
                        <img src="/frameworks.svg" alt="image" />
                        <h5>Modern Frameworks and Libraries</h5>
                      </div>
                      <div className="item">
                        <img src="/software engineer.svg" alt="image" />
                        <h5>System Design</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        src="/color-sharp.png"
        className="background-image-left"
        alt="colorsharp"
      />
    </section>
  );
};
