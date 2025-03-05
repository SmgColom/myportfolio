import CardsList from "../components/features/card/CardsList";
import { useState } from "react";
import "../styles/index.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselList from "../components/features/carousel/CarouselList";



function ProjectsPage() {
  return (
    <Container>
      <h1>My Projects and Portfolio</h1>
      <CardsList />
      <CarouselList />
    </Container>
  )
}

export default ProjectsPage