import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import movieupload from "../assets/movieupload.png"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { addMoviesAPI } from '../../services/allAPI';
function AddMovies() {
  ///state for add movies
  const[moviedata,setmovieData]=useState({
    title:"",description:"",releaseDate:"",starrer:"",genre:"",language:"",movieImg:""
  })
  //status of file
  const[imageFilestatus,setimageFilestatus]=useState(false)
  //create state for url
  const[preview,setPreview]=useState("")
  console.log(moviedata);
  const navigate=useNavigate()
  const handleAdd=async()=>{
    const {title,description,releaseDate,starrer,genre,language,movieImg}=moviedata
    if(!title||!description||!releaseDate||!starrer||!genre||!language||!movieImg){
      toast.info("Please fill the form completely")
    }else{
  const reqBody=new FormData()
  reqBody.append("title",title)
  reqBody.append("description",description)
  reqBody.append("releaseDate",releaseDate)
  reqBody.append("starrer",starrer)
  reqBody.append("genre",genre)
  reqBody.append("language",language)
  reqBody.append("movieImg",movieImg)
const token=sessionStorage.getItem("token")
 if(token){
  const reqHeader={
    "Content-Type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
  console.log("proceed to API call");
  try{
const result=await addMoviesAPI(reqBody,reqHeader)
if(result.status===200){
  //console.log(result.data);
  toast.success(`New Movie ${result.data.title} has Added Successfully!!!`)
  handleCancel()
  
}else{
toast.warning(result.response.data)

}
  }
catch(err){
console.log(err);
}
 } 
  //navigate
  setTimeout(() => {
    navigate('/adminprofile') 
  }, 2000);
    }
   }
//cancel
const handleCancel=()=>{
  setmovieData({
    title:"",description:"",releaseDate:"",starrer:"",genre:"",language:"",
    movieImg:""
  })
  setPreview(movieupload)
}
  //useeffect
  useEffect(()=>{
  if(moviedata.movieImg?.type=="image/png"||moviedata.movieImg?.type=="image/jpg"||moviedata.movieImg?.type=="image/jpeg"){
    console.log("generate image url");
    setimageFilestatus(true)
    setPreview(URL.createObjectURL(moviedata.movieImg))
  }else{
    setPreview("")
    setimageFilestatus(false)
    //console.log("Upload only these file types");
  }
  
  },[moviedata.movieImg])
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
          <input type="text" className='form-control' id="title" placeholder="Title" value={moviedata.title} onChange={e=> setmovieData({...moviedata,title:e.target.value})}/>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className='form-label visually-hidden'>Description</label>
          <input type="text" className='form-control' id="description" placeholder="Description"  value={moviedata.description} onChange={e=> setmovieData({...moviedata,description:e.target.value})}/>
        </div>

        <div className="mb-3">
          <label htmlFor="releaseDate" className='form-label visually-hidden'>Release Date</label>
          <input type="date" className='form-control' id="releaseDate"  value={moviedata.releaseDate} onChange={e=> setmovieData({...moviedata,releaseDate:e.target.value})} />
        </div>

       

        <div className="mb-3">
          <label htmlFor="starrer" className='form-label visually-hidden'>Starrer</label>
          <input type="text" className='form-control' id="starrer" placeholder="Starrer" value={moviedata.starrer} onChange={e=> setmovieData({...moviedata,starrer:e.target.value})}/>
        </div>

        <div className="mb-3">
          <label htmlFor="genre" className='form-label visually-hidden'>Genre</label>
          <input type="text" className='form-control' id="genre" placeholder="Genre" value={moviedata.genre} onChange={e=> setmovieData({...moviedata,genre:e.target.value})} />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className='form-label visually-hidden'>Language</label>
          <input type="text" className='form-control' id="genre" placeholder="Language" value={moviedata.language} onChange={e=> setmovieData({...moviedata,language:e.target.value})} />
        </div>
        
      </form>
    </div>
    <div className="col-lg-4">
    <div className="d-flex justify-content-between mt-5 ms-5">
         <label >
            <input type="file" style={{display:"none"}} onChange={e=> setmovieData({...moviedata,movieImg:e.target.files[0]})} />
            <img width={'150px'} height={'160px'} className='img-fluid  rounded ' src={preview?preview:movieupload} alt="upload profile pic" />
         </label>
         </div>
        {!imageFilestatus &&<div className="text-danger ms-3">*Upload the following file types(jpg,jpeg,png) only* </div>}
    
    </div>
    <div className="mb-3 text-center">
          <button type="submit" className='btn btn-outline-primary mt-4' onClick={handleAdd}><span className='pc'>SUBMIT</span></button>
          <button type="submit" className='btn btn-outline-secondary text-white mt-4 ms-4' onClick={handleCancel}><span className='pc'>CANCEL</span></button>
        </div>
  </div>
  <ToastContainer autoClose={3000} theme='colored'/>
  </div>
)
}

export default AddMovies