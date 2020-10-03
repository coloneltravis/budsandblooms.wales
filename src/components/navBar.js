import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/feedback" className="link-no-style">
              <Nav.Link as="span" eventKey="feedback">
                Feedback
              </Nav.Link>
            </Link>
            <Link to="/resourcepacks" className="link-no-style">
              <Nav.Link as="span" eventKey="resourcepacks">
                Resource Packs
              </Nav.Link>
            </Link>
            <Link to="/contact" className="link-no-style">
              <Nav.Link as="span" eventKey="contact">
                Contact us
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
