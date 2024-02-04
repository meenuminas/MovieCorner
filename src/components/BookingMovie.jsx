import { useState } from 'react';
import {  Button, Col, FormControl, FormLabel, Modal, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import React from 'react'
function BookingMovie() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Dummy data for seat availability
  const seatAvailability = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    // Add more rows as needed
  ];
  
  return (
    <div>
    
    <Row className='mt-5'>
            <Col xs={12} lg={6} className='mb-3 mb-lg-0'>
              <img src="https://i.postimg.cc/52nc8K9S/8b005b4a7dea6a2d9bce131ba2da002c.jpg" alt="" className="img-fluid" style={{height:"480px",width:"448px"}} />
              <div className='mt-5 w-75'>
                <p className='desc'>Meet Matilda,a super-smart girl forced to put up with mean parents and a scary prinicipal-until she discovers she can move objects with her mind!</p>
                <h4 className='fw-bold'>Starrer:Mara Wilson</h4>
                <h5 className='fw-bold'>Genre:Comedy</h5>
                <h6 className='fw-bold'>Release Date:Fri Feb 25 2024</h6>
              </div>
            </Col>
          
             <Col xs={12} lg={6}>
      <Card style={{ width: '100%' }}>
        <form>
          <Card style={{ padding: '5px', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
            <FormLabel >Booking Date</FormLabel>
            <FormControl name='date' type='date' margin='normal' variant='standard'></FormControl>
            <FormLabel className='mt-3'>Seat</FormLabel>
            <button type='button' className='bg-white p-3'onClick={handleShow}></button>

            <button type='button' className='btn btn-outline-danger w-100 mt-3'>
              Book Now
            </button>
          </Card>
        </form>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center pp'>Choose your seat number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {/* Seating arrangement layout */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {seatAvailability.map((row, rowIndex) =>
                    row.map((seatNumber) => (
                      <button key={seatNumber} type='button' className='btn btn-outline-success'>
                        {seatNumber}
                      </button>
                    ))
                  )}
                </div>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      </Card>
    </Col>
</Row>
    
            
    </div>
  )
}

export default BookingMovie