import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rtcgw from "../../Assets/Projects/rtcgw.jpeg";
import perninvoice from "../../Assets/Projects/perninvoice.png";
import licensemanagement from "../../Assets/Projects/licensemanagement.png";
import minitaf from "../../Assets/Projects/minitaf.png";
import movinghouse from "../../Assets/Projects/movinghouse.png";
import weddinghall from "../../Assets/Projects/weddinghall.png";
import merninvoice from "../../Assets/Projects/merninvoice.png";
import siteaccess from "../../Assets/Projects/siteaccess.png"
import webrtctalkmate from "../../Assets/Projects/webrtctalkmate.png"
import bodyguessr from "../../Assets/Projects/bodyguessr.png"
import tutoringcenter from "../../Assets/Projects/tutoringcenter.png"

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
              imgPath={movinghouse}
              isBlog={false}
              title="MovingHouse"
              description="A project developed using Spring Boot, Spring Data JPA, and Spring Security. Containerized with Docker and deployed on AWS EC2. Integration tests were applied using Testcontainers, and the project involved effective team collaboration with Git and GitHub. The application connects people who want to move with moving companies."
              ghLink="https://github.com/Beraber-Calisalim/movinghouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={merninvoice}
              isBlog={false}
              title="Invoice Management System(MERN Stack)"
              description="Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project included authentication, authorization, CRUD operations, and email confirmation. Deployed on Render and Netlify."
              ghLink="https://github.com/muhammedkalabasi10/Invoice-Management-System-MERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minitaf}
              isBlog={false}
              title="Minitaf Test Reporter"
              description="In this project, I developed a RESTful API using Java, Maven, and Spring Boot to list failed Jenkins test cases, rerun them, and document the results. The front-end was built with React, while WebSocket integration enabled real-time log viewing. JUnit was used for testing, and version control was managed with Git and GitHub. The application was containerized and deployed using Docker, with Nginx as the web server.
              <br />
              <i>This is a private repository. If you don't have access permission, you can not see the source of project.</i>"
              ghLink="https://github.com/muhammedkalabasi10/minitaf-test-reporter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtcgw}
              isBlog={false}
              title="RTCGW"
              description="As part of a team, I developed a REST API using Kotlin, Gradle, and Spring Boot, with PostgreSQL for database management. Comprehensive testing was conducted using JUnit, Testcontainers, and Flyway. Git was employed for version control, and GitHub facilitated collaboration among developers.
              <br/><i>This is a private repository. If you don't have access permission, you can not see the source of project.</i>"
              ghLink="https://github.com/OrionInnovationTRTech/rtcgw/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={perninvoice}
              isBlog={false}
              title="PERN Stack Invoice Management System"
              description="Developed using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). The project included authentication,
              authorization, CRUD operations, and email confirmation. Used Supabase as database management."
              ghLink="https://github.com/muhammedkalabasi10/Invoice-Management-System-PERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weddinghall}
              isBlog={false}
              title="Wedding Hall Reservation System"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={licensemanagement}
              isBlog={false}
              title="License Management System"
              description="Developed using .NET and Angular, with models created using a Database First approach, the system allows for managing computer licenses by approving, adding, updating, and deleting licenses."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siteaccess}
              isBlog={false}
              title="Site Access Automation"
              description="I developed a WebRTC project using Node.js and React.js to facilitate peer-to-peer video and voice meetings, as well as messaging, with MongoDB used for database management."
              ghLink="https://github.com/muhammedkalabasi10/WebRTC-TalkMate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webrtctalkmate}
              isBlog={false}
              title="WebRTC TalkMate"
              description="Developed in Python with OpenCV and PIL for image processing, Pymata4 for Arduino operations, Tkinter for the interface, and MySQL for database management, the system includes automatic license plate recognition and automatically opens the barrier to allow cars to enter the site."
              ghLink="https://github.com/muhammedkalabasi10/sitegirisotomasyonu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bodyguessr}
              isBlog={false}
              title="Body Guessr"
              description="Developed a body measurement prediction system using a machine learning algorithm with Python (FastAPI) and React, which predicts measurements from photos."
              //ghLink="https://github.com/muhammedkalabasi10/sitegirisotomasyonu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutoringcenter}
              isBlog={false}
              title="Tutoring Center Management System"
              description="Developed in C to manage students, staff, classes, and financial transactions."
              ghLink="https://github.com/muhammedkalabasi10/dershaneotomasyonu"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
