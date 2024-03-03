import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Header from '../components/Header';
import BookingMovie from '../components/BookingMovie'
function Ticketbook() {
  return (
    <>
      <Header />
      <div className='container-fluid d-flex justify-content-center align-items-center  w-100' style={{ marginTop: '100px' }}>
        <Container className='shadow p-3 mb-5 rounded'>
        
        <BookingMovie></BookingMovie>
        </Container>
      </div>
    </>
  );
}

export default Ticketbook;