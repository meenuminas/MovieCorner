import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UserEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} style={{textDecoration:"none"}} className='btn btn-link text-success
    d-flex align-items-center fw-bolder'><i style={{height:"34px"}} className='fa-solid fa-edit fa-2x me-2'></i></button>
  <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col">
           <div className="mb-3">
            <input className="border rounded p-2 w-100" placeholder='Movie Name'></input>
           </div>
           <div className="mb-3">
            <input className="border rounded p-2 w-100" placeholder='Seat Number'></input>
           </div>
           <div className="mb-3">
            <input className="border rounded p-2 w-100" placeholder='Date'></input>
           </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserEdit