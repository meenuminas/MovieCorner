import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import movieupload from "../assets/movieupload.png"
import SERVER_URL from '../../services/serverUrl';
import { updateMovieAPI } from '../../services/allAPI';

function AdminEdit({movie}) {
///state for add movies
   const[moviedata,setmovieData]=useState({
   id:movie._id , title:movie.title, description:movie.description, releaseDate:movie.releaseDate,
   starrer:movie.starrer, genre:movie.genre, language:movie.language,movieImg:""
  })
   const[show,setShow]=useState(false)
   const handleShow=()=>setShow(true)
   const handleClose=()=> {
    setShow(false)
    setmovieData({id:movie._id , title:movie.title, description:movie.description, releaseDate:movie.releaseDate,
        starrer:movie.starrer, genre:movie.genre, language:movie.language,movieImg:""
      })
      setPreview("")
}
     //create state for url
  const[preview,setPreview]=useState("")
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {   day: 'numeric',month: 'short',year: 'numeric' });
  };
  useEffect(()=>{
if(moviedata.movieImg){
    setPreview(URL.createObjectURL(moviedata.movieImg))
}else{
    setPreview('')
}
  },[moviedata.movieImg])

  const handleUpdate=async()=>{
const{id, title, description, releaseDate,
    starrer, genre, language,movieImg
  }=moviedata
  if(!title||!description||!releaseDate||!
    starrer||!genre||!language){  
          toast.info("Please fill the form completely!!")
        }else{
            const reqBody=new FormData()
  reqBody.append("title",title)
  reqBody.append("description",description)
  reqBody.append("releaseDate",releaseDate)
  reqBody.append("starrer",starrer)
  reqBody.append("genre",genre)
  reqBody.append("language",language)
  preview?reqBody.append("movieImg",movieImg):reqBody.append("movieImg",movie.movieImg)
   
  const token=sessionStorage.getItem("token")
  if(token){
   const reqHeader={
     "Content-Type":preview?"multipart/form-data":"application/json",
     "Authorization":`Bearer ${token}`
   }
   console.log("proceed to API call");
   try{
   const result=await updateMovieAPI(id,reqBody,reqHeader)
   if(result.status===200){
  handleClose()
  //share response to adminprofile
   }else{
    console.log(result);
   }
   }catch(err){
    console.log(err);
   }

}
  }
}
  return (
    <>
    <button onClick={handleShow} style={{textDecoration:'none'}} className="btn btn-link text-warning d-flex align-items-center fw-bolder"><i style={{height:'34px'}}
    className='fa-solid fa-edit fa-2x me-2 text-success'></i></button>
    <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'lemon'}}>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="row">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} onChange={e=>setmovieData({...moviedata,movieImg:e.target.files[0]})} />
     <img src={preview?preview:`${SERVER_URL}/uploads/${movie.movieImg}`} alt="project upload pic" className='mt-5 ' width={'200px'} height={'200px'}/>
              </label>
            </div>
            <div className="col-lg-8 mt-3">
                    <div className="mb-3">
                      <input type="text" className="border rounded p-2 w-100 nn" placeholder='Movie Title' value={moviedata.title} onChange={e=>setmovieData({...moviedata,title:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                      <input type="text" className="border rounded p-2 w-100 nn " placeholder='Description' value={moviedata.description} onChange={e=>setmovieData({...moviedata,description:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                      <input type="text" className="border rounded p-2 w-100 nn" placeholder='Release Date'value={formatDate(moviedata.releaseDate)} onChange={e=>setmovieData({...moviedata,releaseDate:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                      <input type="text" className="border rounded p-2 w-100 nn" placeholder='Starrer' value={moviedata.starrer} onChange={e=>setmovieData({...moviedata,starrer:e.target.value})} />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="border rounded p-2 w-100 nn" placeholder='Genre' value={moviedata.genre} onChange={e=>setmovieData({...moviedata,genre:e.target.value})} />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="border rounded p-2 w-100 nn" placeholder='Language' value={moviedata.language} onChange={e=>setmovieData({...moviedata,language:e.target.value})} />
                    </div>
            </div>
           </div>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="success" onClick={handleUpdate} >UPDATE</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={3000} theme='colored'/>
    
    </>
  )
}

export default AdminEdit