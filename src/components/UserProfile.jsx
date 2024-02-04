import React from 'react'
import imageupload from '../assets/imageupload.png'
function UserProfile() {
  return (
    <div className='p-2'>
        <div className="d-flex justify-content-between mt-5 ms-5">
         <label >
            <input type="file" style={{display:"none"}} />
            <img width={'200px'} height={'200px'} className='img-fluid rounded-circle bg-primary' src={imageupload} alt="upload profile pic" />
         </label>
     
        </div>
        <p className='mt-5 ms-5 pp fw-bold'>NAME</p>
    </div>
  )
}

export default UserProfile