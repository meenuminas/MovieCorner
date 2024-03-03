import React, { createContext, useState } from 'react'
export const addResponseContext=createContext()
function ContextShare({children}) {
    const[movieDetails,setMovieDetails]=useState("")
  return (
    <>
    <addResponseContext.Provider value={{movieDetails,setMovieDetails}}>
    {children}
    </addResponseContext.Provider>
  </>
  )
}

export default ContextShare