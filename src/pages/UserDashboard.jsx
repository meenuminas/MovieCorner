import React from 'react'
import Header from '../components/Header'
import MyBookings from '../components/MyBookings'
import UserProfile from '../components/UserProfile'

function UserDashboard() {
  return (
    <>
    <Header insideuserDashboard/>
    <div style={{ marginTop: '100px' }} className='container'>
     
      <div className="row">
        <div className="col-lg-4">
          <UserProfile></UserProfile>
        </div>
        <div className="col-lg-8">
          <MyBookings></MyBookings>
        </div>
      </div>
    </div>
    </>
  )
}
export default UserDashboard