import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'


function Allmovies() {
  return (
    <>
    <Header/>
    <div style={{marginTop:'100px'}} className='container-fluid'>
    <Row>
      <Col>
      <h1 className='text-center kp'>ALL MOVIES</h1>
      </Col>
    </Row>
    <Row>
      <Col>
     <div className="container text-center mt-5">
      <input type="text" placeholder="Search for Movie " className="w-50 mx-auto nn" />
    </div>
   </Col>
    </Row>
    <Row className='mt-5 ms-3'>
          <Col sm={12} md={6} lg={4}>
            <MovieCard></MovieCard>
          </Col>
         </Row>
    </div>
    </>
  )
}

export default Allmovies