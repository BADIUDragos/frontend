import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Login from './UserInfo'

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <Navbar bg="black" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={"/images/logo_cut.png"} style={{width:400, marginTop: -7}} alt='Annedora'/>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <Login/>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;