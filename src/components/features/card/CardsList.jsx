import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Importa Bootstrap Grid
import CardItem from "./CardItem";
import SG from "../../../assets/SG.png";  
import Bwe from "../../../assets/Bwe.png"; 
import Fwd1 from "../../../assets/Fwd1.png";
import Fwd2 from "../../../assets/Fwd2.png"; 
import LP from "../../../assets/LP.png";


const projects = [
  {
    title: "Landing Page Starter",
    description: "Perfect for showcasing your business online.",
    image: Bwe,
      links: [{ text: "Demo", url: "https://colombiacoffee.santiagomontoya.com.au/" },
    ],
  },
  {
    title: "Business Website Essential",
    description: "Functional business website",
    image: SG,
    links: [
      { text: "Demo", url: "https://thesavegroup.com.au/" },
    ],
  },
  
  {
    title: "Fullstack Web Development",
    description: "Complete web application. Perfect for startups or businesses requiring advanced functionalities",
    image: Fwd2,
    links: [
      { text: "Demo", url: "https://wellness-1-kuob.onrender.com" },
    ],
  },
];


const CardList = () => {
  return (
    <Container className="my-4">
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={10} lg={8} className="mx-auto">
            <CardItem {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;

