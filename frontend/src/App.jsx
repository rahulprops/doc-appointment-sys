import { useState } from 'react'
 import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Doctor from './Pages/Doctor'
import Contact from './Pages/Contact'
import About from './Pages/About'
import MyProfile from './Pages/MyProfile'
import MyAppointment from './Pages/MyAppointment'
import Appointment from './Pages/Appointment'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=' mx-4 sm:mx-[10%]'>
      <NavBar/>
      <Routes>
         
        <Route path='/' element={<HomePage/>} />
        <Route path='/doctors' element={<Doctor/>} />
        <Route path='/doctor/:speciality' element={<Doctor/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointment' element={<MyAppointment/>} />
        <Route path='/appointment/:appId' element={<Appointment/>} />
        <Route path='/registor' element={<Register/>} />
      </Routes>
      </div>
    
      
  )
}

export default App
