import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"

//register API
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

//userlogin API
export const userloginAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/userlogin`,user,"")
}

///adminlogin API
export const adminloginAPI=async(admin)=>{
    return await commonAPI("POST",`${SERVER_URL}/adminlogin`,admin,"")
}
//add-movie API
export const addMoviesAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-movie`,reqBody,reqHeader)
}
//getHome movie
export const getHomeMovieAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/get-homemovie`,"","")
}

//getAll movie
export const getAllMovieAPI=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-allmovie?search=${searchKey}`,"",reqHeader)
}

//get Admin movie
export const getAdminMovieAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-adminmovie`,"",reqHeader)
}

// //get book movies

// export const getBookMovieAPI=async(reqHeader)=>{
//     return await commonAPI("GET",`${SERVER_URL}/get-bookmovie/:movieId`,"",reqHeader)
// }

//remove movie
export const deleteMovieAPI=async(movieId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/remove-movie/${movieId}`,{},reqHeader)
}

//ticket booking
export const ticketBookAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/tickets`,reqBody,reqHeader)
}

//get user book ticket

export const getUserBookAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-user-movie`,"",reqHeader)
}
 //remove tickets
 //remove movie
export const deleteTicketAPI=async(ticketId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/remove-ticket/${ticketId}`,{},reqHeader)
}
//movie/edit

export const updateMovieAPI=async(movieId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/movie/edit/${movieId}`,reqBody,reqHeader)
}

