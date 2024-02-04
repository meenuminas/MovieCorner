import React from 'react'
import { useNavigate } from 'react-router-dom'
import movieupload from "../assets/movieupload.png"
function AddMovies() {
  const navigate=useNavigate()
  const handleAdd=()=>{
    navigate('/adminprofile')
  }
  return (
    <div className='container align-items-center  justify-content-center'>
       <div>
        <h2 className="title text-primary pp text-center">Add a New Movie</h2>
      </div>
    <div className="app-wrapper row">
      <div  className='col-lg-8'>
     
      <form className='form-wrapper mt-3'>
        <div className="mb-3">
          <label htmlFor="title" className='form-label visually-hidden'>Title</label>
          <input type="text" className='form-control' id="title" placeholder="Title" />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className='form-label visually-hidden'>Description</label>
          <input type="text" className='form-control' id="description" placeholder="Description" />
        </div>

        <div className="mb-3">
          <label htmlFor="releaseDate" className='form-label visually-hidden'>Release Date</label>
          <input type="date" className='form-control' id="releaseDate" />
        </div>

       

        <div className="mb-3">
          <label htmlFor="starrer" className='form-label visually-hidden'>Starrer</label>
          <input type="text" className='form-control' id="starrer" placeholder="Starrer" />
        </div>

        <div className="mb-3">
          <label htmlFor="genre" className='form-label visually-hidden'>Genre</label>
          <input type="text" className='form-control' id="genre" placeholder="Genre" />
        </div>
        
        
      </form>
    </div>
    <div className="col-lg-4">
    <div className="d-flex justify-content-between mt-5 ms-5">
         <label >
            <input type="file" style={{display:"none"}} />
            <img width={'150px'} height={'160px'} className='img-fluid  rounded ' src={movieupload} alt="upload profile pic" />
         </label>
     
        </div>
    </div>
    <div className="mb-3 text-center">
          <button type="submit" className='btn btn-outline-primary mt-4' onClick={handleAdd}><span className='pc'>SUBMIT</span></button>
        </div>
  </div>
  </div>
)
}

export default AddMovies