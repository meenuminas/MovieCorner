import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserAuth from './pages/UserAuth'
import UserDashboard from './pages/UserDashboard'
import Allmovies from './pages/Allmovies'
import AdminAuth from './pages/AdminAuth'
import AdminDashboard from './pages/AdminDashboard'
import Ticketbook from './pages/Ticketbook'
import Foooter from './components/Foooter'
import AdminProfile from './pages/AdminProfile'
import { useContext } from 'react'
import { tokenAuthContext } from './Context/tokenAuth'

function App() {
  const{isAuthorized,setIsAuthorized}=useContext(tokenAuthContext)
  return (
    <>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<UserAuth></UserAuth>}></Route>
      <Route path='/register' element={<UserAuth insideRegister></UserAuth>}></Route>
      <Route path='/userdashboard' element={isAuthorized?<UserDashboard></UserDashboard>:<Home></Home>}></Route>
      <Route path='/movies' element={isAuthorized?<Allmovies></Allmovies>:<Home></Home>}></Route>
      <Route path='/adminlogin' element={<AdminAuth></AdminAuth>}></Route>
      <Route path='/admindashboard' element={isAuthorized?<AdminDashboard></AdminDashboard>:<Home></Home>}></Route>
      <Route path='/tickets' element={isAuthorized?<Ticketbook></Ticketbook>:<Home></Home>}></Route>
      <Route path='/adminprofile' element={isAuthorized?<AdminProfile></AdminProfile>:<Home></Home>}></Route>
      <Route path='/*' element={<Navigate to={'/'}/>}></Route>
     </Routes>
     <Foooter></Foooter>
    </>
  )
}

export default App
