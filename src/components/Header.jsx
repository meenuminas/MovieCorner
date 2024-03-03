import React, { useContext } from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { tokenAuthContext } from '../Context/tokenAuth';


function Header({insideuserDashboard,insideAdmin,insideadminprofile,insideaddmovies}) {
  const [show, setShow] = useState(false);
const {isAuthorized,setIsAuthorized}=useContext(tokenAuthContext)
  const navigate=useNavigate()
  const handleAdmin = () =>{
     navigate('/adminlogin')
     setShow(true);
    }
    const handleAddmovie = () =>{
      navigate('/admindashboard')
      setShow(true);
     }
    const handleAdminprofile=()=>{
   navigate('/adminprofile')
    }
    const handleLogout=()=>{
      sessionStorage.clear()
      setIsAuthorized(false)
      navigate('/')
    }
   
  return (
  <>
        <Navbar style={{background:"#26282A",width:"100%",position:'fixed',zIndex:5,top:'0px'}} >
    <Container >
    <Navbar.Brand >  <Link to={'/'} style={{textDecoration:'none'}}>
       <h4 className='pp text-white fw-bold '><i style={{height:'25px'}} className="fa-solid fa-film fa-flip me-2"></i><b><span>M</span>ovies <span>C</span>orner</b></h4>
        </Link></Navbar.Brand>

{insideAdmin&&
<div className="ms-auto">
<button type='button' onClick={handleAdmin} style={{textDecoration:'none'}} className='btn btn-link text-white fw-bolder'><span className='pp fs-5'>Admin</span></button>
</div>}
{insideadminprofile &&
  <div className="ms-auto">
  <button type='button' onClick={handleAddmovie} style={{textDecoration:'none'}} className='btn btn-link text-white fw-bolder'><span className='pp fs-5'>Add Movies</span></button>
  
 
  </div>
}
{insideaddmovies &&
  <div className="ms-auto">
  <button type='button' onClick={handleAdminprofile} style={{textDecoration:'none'}} className='btn btn-link text-white fw-bolder'><span className='pp fs-5'>Profile</span></button>
   </div>
}
     {/* Render the logout button based on the context */}
     {(insideuserDashboard || insideadminprofile || insideaddmovies) && (
              <button onClick={handleLogout} type='button' style={{ textDecoration: 'none' }} className='btn btn-link text-white fw-bolder'>
                <span className='pp fs-5'><i className='fa-solid fa-gear me-2'></i>Logout</span>
              </button>
            )}
    </Container>
  </Navbar>
  
  
  </>
)
}



export default Header