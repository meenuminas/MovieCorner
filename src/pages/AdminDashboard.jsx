import React from 'react'

import AddMovies from '../components/AddMovies'
import Header from '../components/Header'

function AdminDashboard() {
  return (
    <>
    <Header insideaddmovies/>
    <div style={{ marginTop: '100px' }} className='container'>
     
      <div className="row">
        <div className="col-lg-8">
          <AddMovies></AddMovies>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminDashboard