import React from 'react'
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {

  const cartItems = useSelector(state => state.cart.cartItems); 
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0); 

  return (
   <>
   <Navbar expand="lg" className="bg-body-tertiary bgNav">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="">
            <Link to="/">Home </Link>     
            <Link to="electronics">Electronics </Link>    
            <Link to="jewellery">Jewellery </Link>  
            <Link to="mens">Mens </Link>  
            <Link to="womens">Womens </Link>  
          </Nav>
        </Navbar.Collapse>

        <Navbar>
        <Navbar.Brand as={Link} to="add-cart">Cart <span>({totalItems})</span></Navbar.Brand>
      </Navbar>

      </Container>
    </Navbar>
   </>
  )
}
