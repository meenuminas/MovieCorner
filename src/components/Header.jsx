import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Header({insideuserDashboard,insideAdmin}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleAdmin = () => setShow(true);
  return (
  <>
        <Navbar style={{background:"#26282A",width:"100%",position:'fixed',zIndex:5,top:'0px'}} >
    <Container >
    <Navbar.Brand >  <Link to={'/'} style={{textDecoration:'none'}}>
       <h4 className='pp text-white fw-bold '><i style={{height:'25px'}} className="fa-solid fa-film fa-flip me-2"></i><b><span>M</span>ovies <span>C</span>orner</b></h4>
        </Link></Navbar.Brand>
{insideuserDashboard&&
<div className="ms-auto">
<button style={{textDecoration:'none'}} className='btn btn-link text-white fw-bolder'><i className='fa-solid fa-gear me-2'></i>Logout</button>
</div>}
{insideAdmin&&
<div className="ms-auto">
<button type='button' onClick={handleAdmin} style={{textDecoration:'none'}} className='btn btn-link text-white fw-bolder'><span className='pp fs-5'>Admin</span></button>
</div>}

    </Container>
  </Navbar>
  
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title className='pp'>Admin Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Email Input */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          {/* Password Input */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
           Submit
          </Button>
          {/* You can add Save or Apply Changes button if needed */}
        </Modal.Footer> 
      </Modal>
  </>
)
}



export default Header