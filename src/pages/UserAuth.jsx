import React, { useContext, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import userauthimg from '../assets/userauthimg.png'
import Form from 'react-bootstrap/Form';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { registerAPI, userloginAPI } from '../../services/allAPI';
import Spinner from 'react-bootstrap/Spinner';
import { tokenAuthContext } from '../Context/tokenAuth';

function UserAuth({insideRegister}) {
  const{isAuthorized,setIsAuthorized}=useContext(tokenAuthContext)
  //state for seeing loading spinners in logi
  const[loginstatus,setLoginstatus]=useState(false)
  //navigate frome register to userlogin
  const navigate=useNavigate()
  
  console.log(insideRegister);
  const[userInputData,setuserinputData]=useState({
    username:"",email:"",password:""
  })
//   //register onclick
  const handleRegister=async (e)=>{
    e.preventDefault()
      // console.log(userInputdata);
      const {username,email,password}=userInputData
      if(!username||!email||!password){
        toast.info("Please fill the form completely")
      }else{
        // toast.success("proceed to register api")
       try{
     const result=await registerAPI(userInputData)
     console.log(result);
     if(result.status===200){
      toast.success(`Welcome ${result.data.username}...Please login to Book Movies`)
      setuserinputData({username:"",email:"",password:""})
      //navigate to login
      setTimeout(()=>{
        navigate("/login")
      },2000)
     }else{
      toast.error(result.response.data)
     }
       }catch(err){
        console.log(err);
       }
      }

  }
 //function for user login
  const handleuserLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=userInputData
    if(!email||!password){
      toast.info("please fill the form completely")
    }else{
      try{
        const result=await userloginAPI({email,password})
        console.log(result);
        if(result.status===200){
           //store token & username
           sessionStorage.setItem("username",result.data.existingUser.username)
            sessionStorage.setItem("token",result.data.token)
            sessionStorage.setItem("userDetails",JSON.stringify(result.data.existingUser))
            setLoginstatus(true)
            setIsAuthorized(true)
           //navigate to landing page
          setTimeout(() => {
              //to clear datas in the box
          setuserinputData({email:"",password:""})
        
            navigate('/')
            setLoginstatus(false)
          }, 2000);
        }else{
             toast.error(result.response.data)
        }
         
        }catch(err){
          console.log(err);
        }
      }
    }
  
  
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
         
              <Form.Control type="text" placeholder="Enter Name" className='nn' value={userInputData.username}
             onChange={e=> setuserinputData({...userInputData,username:e.target.value})}/>
            </Form.Group>
            }
              
            
                
          <Form.Group className="mb-3" controlId="formBasicEmail">
          
            <Form.Control type="email" placeholder="Enter email"className='nn' value={userInputData.email}
             onChange={e=> setuserinputData({...userInputData,email:e.target.value})}
             />
            
          </Form.Group>
    
        
          <Form.Group className="mb-3" controlId="formBasicPaswd">
    
            <Form.Control type="password" placeholder="Enter Password"  className='nn' value={userInputData.password}
             onChange={e=> setuserinputData({...userInputData,password:e.target.value})}
             />
          </Form.Group>
      
         
        
    {
      insideRegister?
      <div>
      <button className='btn btn-light mb-2' onClick={handleRegister}><span className='pp'>Register</span></button>
     <p className='text-white kp'>Already have an Account? Click here to <Link to={'/login'} className='text-light'>Login</Link></p>
    </div>:
     <div>
          <button className='btn btn-light mb-2 'onClick={handleuserLogin} ><span className='pp fs-5'>Login {loginstatus && <Spinner animation="border" variant="primary" />} </span></button>
           <p className='text-white kp'>New User? Click here to <Link to={'/register'} className='text-light'>Register</Link></p>
         </div>
  }

        </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored'/>
        </div>
    
  )
}

export default UserAuth;