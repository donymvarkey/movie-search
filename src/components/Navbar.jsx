import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-white fw-bold fs-4" href="/">
          MovieLand
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
