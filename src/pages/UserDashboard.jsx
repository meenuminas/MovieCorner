import React, { useContext } from 'react'
import Header from '../components/Header'
import MyBookings from '../components/MyBookings'




function UserDashboard() {

return (
    <>
    <Header insideuserDashboard/>
    <div style={{ marginTop: '100px' }} className='container'>
     
      <div className="row">
        <div className="col">
        
          <MyBookings></MyBookings>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default UserDashboard