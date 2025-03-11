// Import npm packages
// NOTE: Use V5 react-bootstrap syntax, to reduce pulling the ENTIRE library in (can reduce load size)
import Container from 'react-bootstrap/Container';

import { Fragment } from 'react';
import ContactButton from '../components/common/ContactButton';

const Home = () => {
  return (
    <Fragment>
      <Container>
        <div className="hero-section">
          <h1>Modern Web Development</h1>
            <div>
              <p>Stunning Websites tailored for your needs </p>
            </div>
            <p>Lets do it togheter ! </p> 
          <ContactButton></ContactButton>
        </div>
      </Container>
    </Fragment>
  )
}

export default Home