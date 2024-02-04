import React from 'react'
import {Link } from 'react-router-dom';
import userauthimg from '../assets/userauthimg.png'
import Form from 'react-bootstrap/Form';
function UserAuth({insideRegister}) {
  console.log(insideRegister);
  return (
  
    <div style={{width:'100%',height:'100vh',marginTop:"160px"}} className='d-flex justify-content-center align-items-center'>
    <div className="container w-100">
      <Link to={'/'} style={{textDecoration:'none'}} className='text-danger kp'><i className='fa-solid fa-arrow-left'></i>Back to Home</Link>
      <div className="card shadow p-5 " style={{backgroundColor:'rgb(0, 188, 212)'}}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img className='w-100' src={userauthimg} alt="Authentication"  />
          </div>
          <div className="col-lg-6">
            <h1 className='fw-bolder text-light mt-2 kp'>
              <i style={{height:'41px'}} className='fa-solid fa-clapperboard me-3 '></i>Movies Corner
            </h1> 
            <h5 className="fw-bolder text-light mt-5 pp">Sign {insideRegister?"up":"in"} to your Account</h5>
            
            <Form>
          {
            insideRegister&&
            <Form.Group className="mb-3" controlId="formBasicName">
       
            <Form.Control type="text" placeholder="Enter Name" className='nn'
           />
          </Form.Group>
          }
            
          
              
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
          <Form.Control type="email" placeholder="Enter email"className='nn' 
           />
          
        </Form.Group>
  
      
        <Form.Group className="mb-3" controlId="formBasicPaswd">
  
          <Form.Control type="password" placeholder="Enter Password"  className='nn'
           />
        </Form.Group>
    
       
      
  {
    insideRegister?
    <div>
    <button className='btn btn-light mb-2'><span className='pp'>Register</span></button>
    <p className='text-white kp'>Already have an Account? Click here to <Link to={'/login'} className='text-light'>Login</Link></p>
  
   </div>:
   <div>
        <button className='btn btn-light mb-2 '><span className='pp'>Login </span></button>
        <p className='text-white kp'>New User? Click here to <Link to={'/Register'} className='text-light'>Register</Link></p>
       </div>
}
      </Form>
          </div>
        </div>
      </div>
    </div>
    
      </div>
  )
}

export default UserAuth