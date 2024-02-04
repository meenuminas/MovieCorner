import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard() {
  const navigate=useNavigate()
  const handleBooking=()=>{
   navigate('/tickets')
  }
  return (
    <>
      <Card className='shadow mb-5 btn' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/52nc8K9S/8b005b4a7dea6a2d9bce131ba2da002c.jpg" />
      <Card.Body>
        <Card.Title className='text-white fw-bold pp'>MATILDA</Card.Title>
        <Card.Text>
         Fri Feb 25 2024
        </Card.Text>
        <button type='button' className='btn btn-outline-danger' onClick={handleBooking}>Book Now</button>
      </Card.Body>
    </Card>

    </>
  )
}

export default MovieCard