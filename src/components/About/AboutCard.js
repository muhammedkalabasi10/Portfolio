import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammed Kalabaşı </span>
            from <span className="purple"> İstanbul, Türkiye.</span>
            <br />
            I have completed Computer Engineering at Marmara University.
            <br />
            <br />
            I am currently employed as a software developer at Orion Innovation.
            In my professional role, I developed 
              <i><b className="purple"> Java</b></i> applications within a 
              <i><b className="blue"> Scrum</b></i> team and contributed to a large-scale project, 
              <i><b className="blue">WebRTC-Gateway</b></i>, 
              which enabled communication between WebRTC and VoIP endpoints.
              <br />
              <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Theatre
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best investment you can make is in yourself."{" "}
          </p>
          <footer className="blockquote-footer">Warren Buffett</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
