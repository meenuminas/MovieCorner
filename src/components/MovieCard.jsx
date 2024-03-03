import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SERVER_URL from '../../services/serverUrl';
import { addResponseContext } from '../Context/ContextShare';
function MovieCard({movie}) {
const{movieDetails,setMovieDetails}=useContext(addResponseContext)

  const[loginstatus,setLoginstatus]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoginstatus(true)
    }else{
      setLoginstatus(false)
    }
  },[])
  const handleBooking=()=>{
    if(loginstatus===true){
      setMovieDetails(movie)
      navigate('/tickets')
    }else{
      toast.warning("Please Login to access full movie details")
    }
   
  }
  
  return (
    <>
      <Card className='shadow mb-5 btn' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${SERVER_URL}/uploads/${movie?.movieImg}`}height={'290px'}/>
      <Card.Body>
        <Card.Title className='text-white fw-bold pp'>{movie?.title}</Card.Title>
        <Card.Text>
         {movie?.genre}
        </Card.Text>
        <button type='button' className='btn btn-outline-danger' onClick={handleBooking}>Book Now</button>
      </Card.Body>
    </Card>
<ToastContainer autoClose={3000} theme='colored'></ToastContainer>
    </>
  )
}

export default MovieCard