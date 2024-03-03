import React, { useEffect, useState } from 'react';
import adminupload from '../assets/adminupload.png';
import Header from '../components/Header';
import AdminEdit from '../components/AdminEdit'
import { deleteMovieAPI, getAdminMovieAPI } from '../../services/allAPI';


function AdminProfile() {
  const[allMovies,setAllmovies]=useState([])

   const getAdminMovie=async()=>{
    try{
  const token=sessionStorage.getItem("token")
  if(token){
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result=await getAdminMovieAPI(reqHeader)
    if(result.status===200){
      setAllmovies(result.data)
    }
  }
    }catch(err){
            console.log(err);
    }
   }
console.log(allMovies);



const handleDeleteMovie=async(movieId)=>{
  const token=sessionStorage.getItem("token")
  if(token){
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    try{
      const result=await deleteMovieAPI(movieId,reqHeader)
      if(result.status==200){
        
       getAdminMovie()
      }else{
        console.log(err);
      }
     }catch(err){
      console.log(err);
     }
}
}
const[username,setUsername]=useState("")
useEffect(()=>{
  getAdminMovie()
  if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username"))
  }else{
    setUsername("")
  }
},[handleDeleteMovie])
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {   day: 'numeric',month: 'short',year: 'numeric' });
};

  return (
    <>
      <Header insideadminprofile />
      <div style={{ marginTop: '100px' }} className='container'>
        <div className="row">
          <div className="col-lg-4">
            {/* <label>
              <input type="file" style={{ display: "none" }} />
              <img width={'200px'} height={'200px'} className='img-fluid rounded-circle bg-white' src={adminupload} alt="upload profile pic" />
            </label><br /> <br /> */}
            <label>
            <input type="text"  style={{display:'none'}} className='upl text-center bg-black text-white' />
            <h3 className='fw-bolder fs-1 kp ms-5'>Welcome<span className='ms-3 text-success' >{username}</span></h3>
            </label>
          </div>
      
            <div className='border rounded p-2' style={{marginTop:'30px'}}>
      <div className="d-flex justify-content-between">
        <h2 className='text-center ll text-danger'>Added Movies</h2>
        
      </div>

      <div className="mt-4">
       {allMovies.length>0? allMovies.map((movie,index)=>(
       <div key={index} className="border rounded d-flex justify-content-between mb-3 p-2 align-items-center">
       <h5>{movie?.title}</h5>
        <div className="icons d-flex align-items-center">
       
         {/* <div>{formatDate(movie?.releaseDate)}</div> */}
         <AdminEdit movie={movie}></AdminEdit>
        <button onClick={()=>handleDeleteMovie(movie._id)} className='btn btn-link text-danger ms-2'><i style={{height:'34px'}} className='fa-solid fa-trash fa-2x'></i></button>
        </div>
     </div>
       )):
       <div className="fw-bolder">No Movies Uploaded yet!!</div>
              
      }
      </div>
    </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfile;