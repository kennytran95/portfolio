import { Col } from "react-bootstrap";

export const EducationCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={9} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project-images" className="eduCardImg" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
