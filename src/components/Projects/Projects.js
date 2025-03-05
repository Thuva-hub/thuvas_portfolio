import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/gurd.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/timer.png";
import chatify from "../../Assets/Projects/weather.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/hall.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather App"
              description="This is a weather app that can predict current weather, 3 days forecast weather and 3 months weather forecast This is a Python (Flask) application."
              ghLink="https://github.com/Thuva-hub/Weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Hall Vission"
              description="The Hall Vision System allows hall owners to offer customers a visualization tool to design their event setup. Customers can customize layouts, seating, and decorations, getting a real-time preview to ensure their vision matches expectations."
              ghLink="https://github.com/MADHUSHANKARI/Final_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pomodoro Timer"
              description ="This project based for users who are working with computer for long time period. They can see their screen for some time period and then screen will sleep for short time period. In that time works can get small breaks from thir works."
              ghLink="https://github.com/Thuva-hub/Pomodoro-Timer"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GUARD ROOM"
              description ="The Guard Room System is a security management application designed to monitor and track the entrance of individuals into a facility. The system allows Admins, Lecturers, Students, and Visitors to register their details, which are then stored in a database. "
              ghLink="https://github.com/Thuva-hub/Guard_room_front"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
