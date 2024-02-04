import React from 'react';
import landingimg from '../assets/landingimg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/movies');
  };

  return (
    <>
      <Header insideAdmin />

      <div style={{ marginTop: '100px', position: 'relative' }}>
        <img className='img-fluid' src={landingimg} alt='landing' style={{ height: '730px', width: '100%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <h1 className='text-center mb-3 text-white fw-bold kp'><span style={{color:'#1034A6'}}>M</span>ovies <span  style={{color:'#1034A6'}}>C</span>orner
</h1>
          <p className='text-center mb-4 pp'>CINEMA IS A MATTER OF WHAT'S IN THE FRAME AND WHAT'S OUT!!!</p>
          <Link className='btn btn-danger mt-5 'to={'/login'}><span className='pc'>LOGIN TO EXPLORE</span><i className='fa-solid fa-arrow-right'></i>
                    </Link>

        </div>
      </div>

      {/* All project part */}
      <div className='mt-5'>
        <h1 className='text-center mb-5 text-dark fw-bold hh'>NEW RELEASES</h1>
        <marquee>
          <div className='d-flex'>
            <div className='project me-5'>
              <MovieCard></MovieCard>
            </div>
          </div>
        </marquee>
        <div className='text-center'>
          <button onClick={handleNavigate} className='btn btn-link fw-bold '>
           <span className='pc fs-5'> View More Movies</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;