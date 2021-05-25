import React from 'react'
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap'



function Navigbar(){
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Movie-Up</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Admin">admin</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Navigbar