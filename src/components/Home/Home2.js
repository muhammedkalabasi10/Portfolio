import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my_avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am committed to acquiring new skills and continuously improving myself.
              <br />
              <br />My goal is to specialize particularly in
              <i>
                <b className="purple"> Java, Spring Boot,
                and React.js </b>
              </i>
              <br />
              while also 
              <br />
              <br />
              I had the opportunity to work with various frameworks such as 
                <i><b className="purple">.NET, Angular</b></i>
              <br />
              and gaining hands-on experience with technologies like 
                <i><b className="blue">Git, Docker, Nginx, Jenkins, AWS (EC2), and databases including PostgreSQL and MySQL. </b></i>
              <br />
              <br />
              Additionally, I have worked on several projects using technologies like 
                <i><b className="purple">Python, Node.js + Express.js</b>, <b className="blue">MongoDB, and Firebase</b></i>, 
              allowing me to build a diverse technical skill set.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muhammedkalabasi10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammedkalabasi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
