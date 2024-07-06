import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <>
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
                imgPath={require("../../Assets/GetMyAudit.jpeg")}
                isBlog={false}
                title="GetMyAudit"
                description="Contributed to the development and maintenance of the GetMyAudit website, a WordPress-based platform specializing in auditing services. Supported the content management process on the GetMyAudit website, ensuring accuracy and relevance of information to effectively communicate auditing services to users."
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/PGLife.jpeg")}
                isBlog={false}
                title="PGLife"
                description="Created a responsive website to search for PGs available based on user’s interests. Developed a user-friendly interface allowing users to filter PG options by location, price range, amenities, and availability. Implemented a rating and review system to help users make informed decisions based on previous tenants’ feedback. Integrated a backend database (MySQL) to store and manage PG listings, user profiles, and other relevant data."
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/donation.jpg")}
                isBlog={false}
                title="Crowdfunding Platform/Donation Tracker"
                description="Built a Blockchain-based website for Donation Tracker. Implemented Hardhat Framework to create an Ethereum network. Worked on Blockchain Development and Ethereum Network Creation using HardHat, Third-Web Integration, Environment Configuration with dotenv dynamically."
              />
            </Col>
          </Row>
        </Container>
      </Container>





      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Internships</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few internships I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/cgs.jpeg")}
                isBlog={false}
                title="Codesight Global Solutions Pvt. Ltd"
                description="Developed and maintained custom WordPress websites for clients at Codesight Global Solutions, ensuring
                responsive design and optimal user experience.
                Contributed to the customization of WordPress themes and plugins to meet the specific requirements of
                GetMyAudit, enhancing its functionality and user experience.
                Learnt the basics of ReactJs and its framework"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={require("../../Assets/kalpin.jpeg")}
                isBlog={false}
                title="Kalpin Tech Pvt. Ltd"
                description="Played a vital role in assembling drones, contributing to the construction and integration of hardware
                components to ensure optimal performance and functionality.
                Collaborated with team members to test and calibrate drone systems, troubleshooting technical issues and
                fine-tuning configurations to meet project requirements and quality standards."
              />
            </Col>
            
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
