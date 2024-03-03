import React, {useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table';
import { deleteTicketAPI, getUserBookAPI } from '../../services/allAPI';



function MyBookings() {
 
//to get the name of user
const[username,setUsername]=useState("")

useEffect(()=>{
if(sessionStorage.getItem("username")){
  setUsername(sessionStorage.getItem("username"))
}else{
  setUsername("Name")
}
},[])
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {   day: 'numeric',month: 'short',year: 'numeric' });
};


//ticket details
const[userbook,setUserbook]=useState([])

  const getUserBooking=async()=>{
    try{
      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        const result =await getUserBookAPI(reqHeader)
        if(result.status===200){
          setUserbook(result.data)
          setTotalCost(result.totalCost); // Assuming the total cost is included in the response
          
        }
      }
    }catch(err){
      console.log(err);
    }
  }
  console.log(userbook);
  
  const handleTicketDelete=async(ticketId)=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      try{
        const result=await deleteTicketAPI(ticketId,reqHeader)
        if(result.status==200){
       getUserBooking
        }else{
          console.log(err);
        }
       }catch(err){
        console.log(err);
       }
  }
  }
  useEffect(()=>{
    getUserBooking()
  },[handleTicketDelete])
    return (
    <div className='p-2'>
      <div>
      
        <div className="d-flex justify-content-between mt-3" >
          <marquee className='w-25 container text-center'>
            <h1 className='mt-2 pp fw-bold text-center p-3 'id="demo">Hey,<span className='fs-1 fw-bolder text-primary ms-3'>{username?.split(" "[0])}!!</span></h1>
          
          </marquee>
        </div>
       
      <h3 className='text-center pp mt-5'>My <span className='text-danger'>Bookings</span></h3>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-between mt-5">
          <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Movie</th>
          <th>Seat No</th>
          <th>Date of Booking</th>
          
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {userbook.length > 0 ? (
                userbook.map((booking,index) => (
                  <tr key={index}>
                    <td>{booking.title}</td>
                    {/* <td>{booking.seatNo}</td> */}
                    <td>
                     {booking.seatNo.map((seat, i) => (
             <span key={i}>{seat} {i !== booking.seatNo.length - 1 && ','}</span>
                   ))}
                                        </td>
                    <td>{formatDate(booking.bookingDate)}</td>
                    <td>
                    
                
                    
                      <div className="btn btn-link text-danger ms-1">
                       <button onClick={()=> handleTicketDelete(booking._id)} className='btn btn-link text-danger ms-2'> <i className="fa-solid fa-trash fa-2x" style={{ height: '34px' }}></i></button>
                      </div>
                      </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center fw-bolder text-danger fs-3 pp">
                    No Movies Booked yet!!!
                  </td>
                </tr>
              )}
       
      </tbody>
    </Table>
          <div className="icons d-flex align-items-center">
           
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBookings