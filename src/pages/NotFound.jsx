import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import { BiHome } from "react-icons/bi";


function NotFound() {
  return (
    <div>
      <Container>
        <h2>Hmm...</h2>
        <p>Page not found, please go back to Home Page</p>

        <Link to="/" className="homeBtn">
          <BiHome id="btn-icon" aria-labelledby="Home button"/>
        </Link>
      </Container>
    </div>
  )
}

export default NotFound