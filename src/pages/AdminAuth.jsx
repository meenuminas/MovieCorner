import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { useNavigate} from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { adminloginAPI } from '../../services/allAPI';
import Header from '../components/Header';
import { tokenAuthContext } from '../Context/tokenAuth';

function AdminAuth() {
  const {isAuthorized,setIsAuthorized}=useContext(tokenAuthContext)
  //state for input
  const[userInputData,setuserinputData]=useState({
    username:"",password:""
  })
  //state for seeing loading spinners in logi
  const[loginstatus,setLoginstatus]=useState(false)
  //navigate frome register to userlogin
  const navigate=useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = userInputData;
    if (!username || !password) {
      toast.info("Please fill the form completely");
    } else {
      try {
        const result = await adminloginAPI({ username, password });
        console.log("Response:", result);
        if (result.status === 200) {
          // Admin authentication successful
          sessionStorage.setItem("username", result.data.username);
          sessionStorage.setItem("token", result.data.token);
          setLoginstatus(true);
          setIsAuthorized(true)
          setTimeout(() => {
            // Clear data in the form inputs
            setuserinputData({ username: "", password: "" });
            navigate("/adminprofile");
            setLoginstatus(false);
          }, 1000);
        }  else {
          // Other error - show error message from server
          console.log("Error:", result.response?.data);
          toast.error(result.response?.data || "An error occurred");
        }
      } catch (err) {
        console.log("Error:", err);
      }
    }
  };
  
  
  

  return (
    <div>
      <Header/>
    <div  className="modal show"
    style={{ display: 'block', position: 'initial',marginTop:'120px' }}
  > 
     
      <Modal.Dialog>
        <Modal.Header >
        <Modal.Title className='pp'>Admin Settings</Modal.Title>

        </Modal.Header>

        
        <Modal.Body>
          {/* Email Input */}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={userInputData.username}
           onChange={e=> setuserinputData({...userInputData,username:e.target.value})}/>
          </Form.Group>

          {/* Password Input */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={userInputData.password}
           onChange={e=> setuserinputData({...userInputData,password:e.target.value})}/>
          </Form.Group>
        </Modal.Body>

        

        <Modal.Footer>
         
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
      <ToastContainer autoClose={3000} theme='colored'></ToastContainer>
    </div>
    </div>
  )
}

export default AdminAuth