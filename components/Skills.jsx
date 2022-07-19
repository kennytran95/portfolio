import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

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
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <Image src={meter1} alt="image" />
                  <h5>Full Stack Engineering</h5>
                </div>
                <div className="item">
                  <Image src={meter2} alt="image" />
                  <h5>UI/UX Design</h5>
                </div>
                <div className="item">
                  <Image src={meter3} alt="image" />
                  <h5>Database Management</h5>
                </div>
                <div className="item">
                  <Image src={meter1} alt="image" />
                  <h5>Restful API</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Image
        src={colorSharp}
        className="background-image-left"
        alt="colorsharp"
      />
    </section>
  );
};
