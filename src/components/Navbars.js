import React from 'react'
import { Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
const Navbars = () => {
  return (
    <>

        <Navbar bg="light"   className='text-dark '>
    <Container>
    <Navbar.Brand href="/">Blog Logo</Navbar.Brand>

    <Nav >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contacts">Contacts</Nav.Link>
      <Nav.Link href="/categories">Categories</Nav.Link>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
    </Nav>
    <Nav >
      <Nav.Link href="/signup">SignUp</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>

    </Nav>
    </Container>
  </Navbar>


    </>
  )
}

export default Navbars