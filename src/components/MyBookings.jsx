import React from 'react'
import UserEdit from './UserEdit'

import Table from 'react-bootstrap/Table';
function MyBookings() {

  return (
    <div className='p-2'>
      <div>
      <h1 className='text-center pp'>My <span className='text-danger'>Bookings</span></h1>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-between mt-5">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Movie Name</th>
          <th>Seat No</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Matilda</td>
          <td>03</td>
          <td>Fri Feb 25 2024</td>
    <td> <UserEdit></UserEdit></td>
    <td> <div className="btn  btn-link text-danger ms-1"><i className='fa-solid fa-trash fa-2x' style={{height:"34px"}}></i></div></td>
        </tr>
     
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