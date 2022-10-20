import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, stack }) => {
  console.log(stack, "got it?");
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project-images" className="projCardImg" />
          <div className="proj-txtx">
            <h4 className="connect-title">{title}</h4>
            <span className="connect-slide">{description}</span>
            <br />
            <br />
            <ul className="techList">
              {stack &&
                stack.map((tech, index) => {
                  return (
                    <li className="techListItem" key={index}>
                      {tech}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </a>
    </Col>
  );
};
