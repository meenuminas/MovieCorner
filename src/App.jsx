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

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<UserAuth></UserAuth>}></Route>
      <Route path='/register' element={<UserAuth insideRegister></UserAuth>}></Route>
      <Route path='/userdashboard' element={<UserDashboard></UserDashboard>}></Route>
      <Route path='/movies' element={<Allmovies></Allmovies>}></Route>
      <Route path='/adminlogin' element={<AdminAuth></AdminAuth>}></Route>
      <Route path='/admindashboard' element={<AdminDashboard></AdminDashboard>}></Route>
      <Route path='/tickets' element={<Ticketbook></Ticketbook>}></Route>
      <Route path='/adminprofile' element={<AdminProfile></AdminProfile>}></Route>
      <Route path='/*' element={<Navigate to={'/'}/>}></Route>
     </Routes>
     <Foooter></Foooter>
    </>
  )
}

export default App
