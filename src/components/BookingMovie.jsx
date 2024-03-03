import { useContext, useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { addResponseContext} from '../Context/ContextShare';
import { useNavigate } from 'react-router-dom';
import SERVER_URL from '../../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ticketBookAPI } from '../../services/allAPI';


function BookingMovie() {
  const navigate = useNavigate();
  const { movieDetails, setMovieDetails } = useContext(addResponseContext);
  const [show, setShow] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Dummy data for seat availability
  const seatAvailability = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
    // Add more rows as needed
  ];

 // Function to handle seat selection
const handleSeatSelection = (seatNumber) => {
  let updatedSeats;
  if (movieData.seatNo.includes(seatNumber)) {
    // If the seat is already selected, remove it from the selected seats
    updatedSeats = movieData.seatNo.filter(seat => seat !== seatNumber);
  } else {
    // If the seat is not selected, add it to the selected seats
    updatedSeats = [...movieData.seatNo, seatNumber];
  }
  // Calculate total cost based on the number of selected seats
  const totalCost = updatedSeats.length * 150; // Assuming ticket price is 150 Rs per seat

  setMovieData({ ...movieData, seatNo: updatedSeats,totalCost });
};
// Function to calculate total cost based on selected seats
const calculateTotalCost = () => {
  const ticketPrice = 150; // Assuming ticket price is 150 Rs per seat
  return selectedSeats.length * ticketPrice;
};

 //state for ticket
 const [movieData, setMovieData] = useState({
  bookingDate: "",
  seatNo: [],
  movie:movieDetails._id,
 
  title:"",
  totalCost:0
 
});
console.log(movieData);

const handleBookNow = async (e) => {
  e.preventDefault();
  console.log(movieData);
  const { bookingDate, seatNo, title } = movieData;
 const totalCost = calculateTotalCost();

  if (!bookingDate || !seatNo || !title) {
    toast.info("Please Fill the Complete Ticket Details!!");
  } else {
   
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        // Redirect user to login page or display a message indicating they need to login
        // For now, just console log an error message
        console.error("User not logged in. Redirect to login page or display a message.");
        return;
      }

      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
      
      const result = await ticketBookAPI(movieData,reqHeader);
      console.log(result);
      if (result.status === 200) {
        toast.success(`Booked ticket for ${movieDetails.title}`);
        setTimeout(() => {
          navigate('/userdashboard');
          setMovieData({ bookingDate: "", seatNo: [], title: "" });
        }, 2000);
      } else {
        toast.warning("This Seat is already Booked for this movie!!");
      }
    } catch (err) {
      console.error(err);
    }
  }
};



  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {  month: 'short', day: 'numeric',year: 'numeric' });
  };

  return (
    <div>
      {movieDetails && (
        <h1 className='text-center mt-3 tt justify-content-center'>Book Tickets for {movieDetails.title}</h1>
      )}

      <Row className='mt-5'>
        {movieDetails && (
          <Col xs={12} lg={6} className='mb-3 mb-lg-0'>
            <img src={`${SERVER_URL}/uploads/${movieDetails.movieImg}`} alt="" className="img-fluid" style={{ height: "480px", width: "448px" }} />
            <div className='mt-5 w-75'>
              <p className='desc'>{movieDetails.description}</p>
              <h3 className='fw-bold'>Starrer:{movieDetails.starrer}</h3>
              <h4 className='fw-bold'>Genre:{movieDetails.genre}</h4>
              <h5 className='fw-bold'>Language:{movieDetails.language}</h5>
              <h6 className='fw-bold'>Release Date: {formatDate(movieDetails.releaseDate)}</h6>
            </div>
          </Col>
        )}

        <Col xs={12} lg={6}>
          <Card style={{ width: '100%', marginTop: '100px' }}>
            <form>
             
              <Card style={{ padding: '5px', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
              <label className='mt-4 text-white kp fs-5'>Movie Name</label>
                <input value={movieData.title} onChange={e => setMovieData({ ...movieData, title: e.target.value })} type='text' className='mto mt-2 text-white'></input>
       
             <label className='mt-4 text-white kp fs-5'>Booking Date</label>
                <input value={movieData.bookingDate} onChange={e => setMovieData({ ...movieData, bookingDate: e.target.value })} type='date' className='mto mt-2 text-primary'></input>
                <label  htmlFor="tac" className='mt-5 text-white kp fs-5'>Seat</label>
                <Card.Text> {movieData.seatNo.join(",") } </Card.Text>
                   <input id="tac" style={{display:'none'}} value={movieData.seatNo} onChange={e=>setMovieData({...movieData, seatNo: e.target.value})}/>
                <button type='button' className='p-3 mtop' onClick={handleShow}></button>
<p className='mt-3 text-white kp fs-4'>TicketPrice:  $ {movieData.totalCost}</p>
                <button type='button' onClick={handleBookNow} className='btn btn-outline-danger w-100 mt-4'>
                  Book Now
                </button>
              </Card>
            </form>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className='text-center pp'>Choose your seat number</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {seatAvailability.map((row, rowIndex) =>
                    row.map((seatNumber) => (
                      <Button 
                      key={seatNumber} 
                      type='button' 
                      className={`btn ${movieData.seatNo.includes(seatNumber) ? 'btn-danger' : 'btn-success'}`} 
                      onClick={() => handleSeatSelection(seatNumber)}
                    >
                      {seatNumber}
                    </Button> 
                    ))
                  )}
                </div>
          
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </Card>
        </Col>
      </Row>

      <ToastContainer autoClose={3000} theme='colored' />
    </div>
  )
}

export default BookingMovie;


