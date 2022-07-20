import { Col, Container, Row } from "react-bootstrap";
import { FooterInfoBox } from "./FooterInfoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <FooterInfoBox />
          <Col size={12} sm={6}>
            <img src="/logo.svg" alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
