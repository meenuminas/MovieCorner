import React from 'react';
import adminupload from '../assets/adminupload.png';
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';

function AdminProfile() {

  return (
    <>
      <Header />
      <div style={{ marginTop: '100px' }} className='container'>
        <div className="row">
          <div className="col-lg-4">
            <label>
              <input type="file" style={{ display: "none" }} />
              <img width={'200px'} height={'200px'} className='img-fluid rounded-circle bg-white' src={adminupload} alt="upload profile pic" />
            </label><br /> <br />
            <input type="email" placeholder='email' className='upl text-center bg-black text-white' />
          </div>
          <div className="col-lg-8">
            <h1 className='text-center ll text-danger'>Added Movies</h1>
            <div className="border rounded d-flex  mt-5">
             <form  className="mt-4">
              <div className="mb-3 d-flex justify-content-flex">
               <Row>
                <Col lg={6}>
                  <label htmlFor="movieName" className="form-label">Movie Name</label>
                  </Col>
              <Col lg={6}> <label htmlFor="releasingDate" className="form-label">Releasing Date</label>
              </Col> 
                </Row>
              
              </div>
             
            </form>
            </div>
        
            
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfile;