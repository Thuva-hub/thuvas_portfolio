import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">A.Thuvarakan </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            A passionate Information Technology student at the Institute of Technology, University of Moratuwa,
            <br />
            with a strong foundation in full stack development and data engineering using Python
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Falling should only be for the sake of rising.!"{" "}
          </p>
          <footer className="blockquote-footer">Thuvarakan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
