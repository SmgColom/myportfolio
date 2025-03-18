import CardsList from "../components/features/card/CardsList";
import { useState } from "react";
import "../styles/index.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselList from "../components/features/carousel/CarouselList";
import ContactButton from '../components/common/ContactButton';


function ProjectsPage() {
  return (
    <Container>
      <h1>My Projects and Portfolio</h1>
      <CardsList />
      <CarouselList />
      <div className="card-title">
      <p style={{ marginTop: "10px" }}>Get a quote for your website today!</p>
      </div>
      <ContactButton></ContactButton>
    </Container>
    
  )
}

export default ProjectsPage