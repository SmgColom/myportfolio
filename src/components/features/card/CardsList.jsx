import React from "react";
import CardItem from "./CardItem";
import { Container, Row, Col } from "react-bootstrap";
import SG from "../../../assets/SG.png";  
import Bwe from "../../../assets/Bwe.png"; 
import Fwd1 from "../../../assets/Fwd1.png";
import Fwd2 from "../../../assets/Fwd2.png"; 
import LP from "../../../assets/LP.png";


const projects = [
  {
    title: "Landing Page Starter",
    description: "Landing page (1 section), Perfect for showcasing your business online.   A $ 299",
    image: LP,
    items: ["10-day delivery – 1 Revision.", "Functional website.", "1 page.", "Content upload.", "1 product"],
    links: [
      { text: "Demo", url: "https://soccerplayerfinder.santiagomontoya.com.au/" },
    ],
  },
  {
    title: "Business Website Essential",
    description: "Functional business website with up to 5 pages (Home, About Us, Services, Blog, and and Contact)  A $1996",
    image: SG,
    items: ["21-day delivery – 3 Revisions.", "Functional website.", "5 pages.", "Content upload", "6 products"],
    links: [
      { text: "Demo", url: "https://thesavegroup.com.au/" },
    ],
  },
  {
    title: "Business Website Essential",
    description: "Functional business website with up to 5 pages (Home, About Us, Services, Blog, and and Contact)  A $1996",
    image: Bwe,  // ✅ Corrección aquí (sin `{}`)
    items: ["21-day delivery – 3 Revisions.", "Functional website.", "5 pages.", "Content upload", "6 products"],
    links: [
      { text: "Demo", url: "https://colombiacoffee.santiagomontoya.com.au/" },
    ],
  },
  {
    title: "Fullstack Web Development",
    description: "Complete web application. Perfect for startups or businesses requiring advanced functionalities  A $ 6.485",
    image: Fwd1,
    items: ["45-day delivery – 5 Revisions", "Functional website", "10 pages", "Content upload", "10 products"],
    links: [
      { text: "Demo", url: "https://furryfriends-1.onrender.com" },
    ],
  },
  {
    title: "Fullstack Web Development",
    description: "Complete web application. Perfect for startups or businesses requiring advanced functionalities  A $ 6.485",
    image: Fwd2,
    items: ["45-day delivery – 5 Revisions", "Functional website", "10 pages", "Content upload", "10 products"],
    links: [
      { text: "Demo", url: "https://wellness-1-kuob.onrender.com" },
    ],
  },
];

const ProjectsList = () => {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <CardItem {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsList;
