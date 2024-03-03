import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import { getAllMovieAPI } from '../../services/allAPI'


function Allmovies() {
  const[searchKey,setSearchKey]=useState("")
  const[allMovies,setAllmovies]=useState([])

   const getAllMovie=async()=>{
    try{
  const token=sessionStorage.getItem("token")
  if(token){
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result=await getAllMovieAPI(searchKey,reqHeader)
    if(result.status===200){
      setAllmovies(result.data)
    }
  }
    }catch(err){
            console.log(err);
    }
   }
console.log(allMovies);
useEffect(()=>{
getAllMovie()
},[searchKey])
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
     
      <input onChange={e=> setSearchKey(e.target.value)} type="text" placeholder="Search for Movie " className="w-50 mx-auto nn" style={{border:'none'}} />
      </div>
   </Col>
    </Row>
    <Row className='mt-5 ms-lg-4 p-lg-5 p-3'>
         {allMovies.length>0?allMovies?.map((movie,index)=>(
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <MovieCard movie={movie}></MovieCard>
          </Col>
         )) :
          <div className='w-100 text-center fw-bolder text-danger'>Nothing to display!!!!</div>
          }
         </Row>
    </div>
    </>
  )
}

export default Allmovies