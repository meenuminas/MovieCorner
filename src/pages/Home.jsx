import React, { useEffect, useState } from 'react';
import landingimg from '../assets/landingimg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeMovieAPI} from '../../services/allAPI';
import BookingMovie from '../components/BookingMovie';

function Home() {
  const[allMovies,setAllmovies]=useState([])
  const [loginstatus, setLoginstatus] = useState(false);
  const navigate = useNavigate();
 
  //asyn fn for api
  const getHomeMovie=async()=>{
    try{
      const result=await getHomeMovieAPI()
      if(result.status===200){
        setAllmovies(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getHomeMovie()
    if (sessionStorage.getItem("token")) {
      setLoginstatus(true);
    } else {
      setLoginstatus(false);
    }
  }, []);

  const handleNavigate = () => {
    if (loginstatus) {
      navigate('/movies');
    } else {
      toast.warning("Please Login to access full movie details");
    }
  };
const handleBookNow=()=>{

navigate('/userdashboard')
}
  return (
    <>
      <Header insideAdmin={!loginstatus} />

      <div style={{ marginTop: '100px', position: 'relative' }}>
        <img className='img-fluid' src={landingimg} alt='landing' style={{ height: '730px', width: '100%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <h1 className='text-center mb-3 text-white fw-bold kp'>
            <span style={{ color: '#1034A6' }}>M</span>ovies <span style={{ color: '#1034A6' }}>C</span>orner
          </h1>
          <p className='text-center mb-4 pp'>CINEMA IS A MATTER OF WHAT'S IN THE FRAME AND WHAT'S OUT!!!</p>
          {loginstatus ? (
            <button className='btn btn-danger mt-5'onClick={handleBookNow}>
              <span className='pc'>My Bookings</span>
            </button>
          ) : (
            <Link className='btn btn-danger mt-5' to={'/login'}>
              <span className='pc'>LOGIN TO EXPLORE</span>
              <i className='fa-solid fa-arrow-right'></i>
            </Link>
          )}
        </div>
      </div>

      {/* All project part */}
      <div className='mt-5 ms-lg-5 ms-3 p-2'>
        <h1 className='text-center mb-5 text-dark fw-bold hh'>NEW RELEASES</h1>
     
        <div className='row ms-lg-5 p-lg-5 p-3'>
         {allMovies.length>0&& allMovies.map((movie,index)=>(
            <div key={index} className='col'>
            <MovieCard movie={movie}/> 
          </div>
         )) }
          
        </div>
       
        <div className='text-center'>
          <button onClick={handleNavigate} className='btn btn-link fw-bold'>
            <span className='pc fs-5'>View More Movies</span>
          </button>
        </div>
        <ToastContainer autoClose={3000} theme='colored' />
      </div>
    </>
  );
}

export default Home;
