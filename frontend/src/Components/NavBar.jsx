import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    const [showMenu,setShowMenu]=useState(false)
    const [token,setToken]=useState(false)
  return (
    <div className=' flex justify-between items-center py-3 text-sm mb-5 border-b border-b-slate-500 '>
        <div>logo</div>
        <ul className=' hidden md:flex font-medium gap-5 items-start capitalize'>
            <NavLink to="/">
                <li className=' py-1'>
                    home
                </li>
                <hr className=' border-none outline-none  h-0.5 bg-purple-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/doctors">
                <li className=' py-1'>
                    all doctors
                </li>
                <hr className=' border-none outline-none  h-0.5 bg-purple-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="about">
                <li className=' py-1'>
                    about
                </li>
                <hr className=' border-none outline-none  h-0.5 bg-purple-500 w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="contact">
                <li className=' py-1'>
                    contact
                </li>
                <hr className=' border-none outline-none  h-0.5 bg-purple-500 w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        
      <div>
      {
        token 
         ? <div></div>
         :
         <button onClick={()=>navigate("/login")} className=' bg-purple-700 text-white text-lg font-light px-8 py-3 rounded-full hidden md:block'>creat accout</button>
         
      }
      </div> 
    </div>
  )
}

export default NavBar