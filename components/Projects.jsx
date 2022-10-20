import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Bark",
      description:
        "Facebook/Twitter replica for Dog Owners. Create & join events, organize meetups at your nearest dog parks, search for events sorted by users, groups, or events, and 1-on-1 messaging!",
      imgUrl: "/Blue ocean.gif",
      link: "https://github.com/Team-Private-Penguin/Bark",
      stack: ["next.js", "typescript", "postgreSQL", "React", "mantineUI"],
    },
    {
      title: "Scrapbook",
      description:
        "Create your own digital postcards to remember all of your precious memories. Each postcard interacts with the spotify API to play a song that captured the moment.",
      imgUrl: "/mvp.gif",
      link: "https://github.com/kennytran95/scrapbook",
      stack: [
        "mongoDB",
        "typescript",
        "Spotify API",
        "React",
        "Cloudinary API",
        "Express.js",
        "node.js",
      ],
    },
    {
      title: "Verde - Baratheonly",
      description:
        "Full stack ecommerce website with an API communicating to a database optimized for 15+ million data entires for an ecommerce website",
      imgUrl: "/verde.gif",
      link: "https://github.com/RFP-Verde/RFP-2204-FEC",
      stack: [
        "typescript",
        "postgreSQL",
        "Loader.io",
        "NGINX",
        "React",
        "CSS",
        "Cloudinary API",
        "node.js",
        "express.js",
      ],
    },
    // {
    //   title: "Verde",
    //   description: "Front End Capstone Project for an Ecommerce Website",
    //   imgUrl: "/project-img1.png",
    // },
  ];

  const experiences = [
    {
      title: "Software Engineer Immersive Resident @ Galvanize",
      description:
        "My responsibilities included mentoring students, conducting mock interviews, & teaching Javascript, CS fundamentals, and modern web development. I provided on-call technical support for blocked students by debugging and code reviewing. ",
      imgUrl: "/294990032_5191392587582643_6909683801791927312_n.jpg",
    },
    {
      title: "Veterinary Technician @ Irvine Pet Hospital/Anaheim Animal Care",
      description:
        "I have assisted in 500+ surgeries, placed IV catheters, sterilized instruments, and collected lab samples. I worked my hardest to ensure pet owners that their pet's lives were in the right hands.",
      imgUrl: "/golden puppy.jpg",
    },
  ];

  const educations = [
    {
      title: "UC Davis",
      description:
        "I graduated from UC Davis with a bachelors degree in animal sciences. I've been on the Dean's list multiple times!",
      imgUrl: "/Graduation_Pictures_-23_mvmkts.jpg",
    },
    {
      title: "Hack Reactor",
      description:
        "Full Time Software Engineering Bootcamp for computer science, Javascript Fundamentals, and Full stack development. I've worked countless hours in a fast-paced environment with various teams of many sizes.",
      imgUrl: "/Graduation_Pictures_-125_et7ble.jpg",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__bounce"
                      : "animate__animated animate__fadeOut"
                  }
                >
                  <h2>Projects & Information</h2>
                  <p>
                    These are several projects that I have created recently.{" "}
                    Please take a look and feel free to ask any questions below!
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Education</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content
                id="slideInUp"
                // className={isVisible ? "animate__zoomOutUp" : ""}
              >
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {experiences.map((experience, index) => {
                      return <ExperienceCard key={index} {...experience} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {educations.map((education, index) => {
                      return <EducationCard key={index} {...education} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src="/color-sharp2.png"
        alt="colorsharp2"
      />
    </section>
  );
};
