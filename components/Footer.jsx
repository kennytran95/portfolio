import { Col, Container, Row } from "react-bootstrap";
import { FooterInfoBox } from "./FooterInfoBox";

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
              <a href="">
                <img src="/nav-icon1.svg" />
              </a>
              <a href="">
                <img src="/nav-icon1.svg" />
              </a>
              <a href="">
                <img src="/nav-icon3.svg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
