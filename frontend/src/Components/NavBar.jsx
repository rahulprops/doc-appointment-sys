import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import image from "../assets/kurta.jpg";
import { IoChevronDownSharp } from "react-icons/io5";
const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);
  return (
    <div className=" flex justify-between items-center py-3 text-sm mb-5 border-b border-b-slate-500 ">
      <div>logo</div>
      <ul className=" hidden md:flex font-medium gap-5 items-start capitalize">
        <NavLink to="/">
          <li className=" py-1">home</li>
          <hr className=" border-none outline-none  h-0.5 bg-purple-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className=" py-1">all doctors</li>
          <hr className=" border-none outline-none  h-0.5 bg-purple-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="about">
          <li className=" py-1">about</li>
          <hr className=" border-none outline-none  h-0.5 bg-purple-500 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="contact">
          <li className=" py-1">contact</li>
          <hr className=" border-none outline-none  h-0.5 bg-purple-500 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div>
        {token ? (
          <div className=" flex relative  group cursor-pointer ">
            <img src={image} alt="" className=" w-11 h-12 rounded-full" />
            <IoChevronDownSharp size={15} className=" mt-4 text-slate-700" />
            <div className=" absolute top-12 left-5 py-2 px-2 w-32 bg-slate-100 rounded-md hidden group-hover:block ">
              <div>
                <p onClick={()=>navigate('/my-profile')} className=" cursor-pointer hover:text-slate-950 text-sm capitalize font-medium text-slate-500 py-1">
                  my profile
                </p>
                <p onClick={()=>navigate('/my-appointment')} className=" text-sm  cursor-pointer hover:text-slate-950 capitalize font-medium text-slate-500 py-1">
                  my appointment
                </p>
                <p onClick={()=>setToken(true)} className="  text-sm cursor-pointer hover:text-red-950 capitalize font-medium text-slate-500 py-1">
                  logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className=" bg-purple-700 text-white text-lg font-light px-8 py-3 rounded-full hidden md:block"
          >
            creat accout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
