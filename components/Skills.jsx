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
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src="/meter1.svg" alt="image" />
                        <h5>Full Stack Engineering</h5>
                      </div>
                      <div className="item">
                        <img src="/meter2.svg" alt="image" />
                        <h5>UI/UX Design</h5>
                      </div>
                      <div className="item">
                        <img src="/meter3.svg" alt="image" />
                        <h5>Database Management</h5>
                      </div>
                      <div className="item">
                        <img src="/meter1.svg" alt="image" />
                        <h5>Restful API</h5>
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
