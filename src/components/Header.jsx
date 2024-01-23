import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg"
import { FiMoon, FiSun } from 'react-icons/fi'
const Header = () => {
  const [isLightMode , setIsLightMode] =  useState(true);
  const handleChangeMode = () =>{
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <header className='h-[90px]'>
       <div className="header dark:bg-slate-800 px-10 h-full border-b-2 border-slate-200 dark:border-slate-700 flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="app-logo" width={100} />
        </div>
        <nav className='flex items-center justify-center gap-5'>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/">Personnal Informations</NavLink>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/educations">Education</NavLink>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/experiences">Experiences</NavLink>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/skills">Skills</NavLink>
          <NavLink className="py-2 px-5 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/languages">Languages</NavLink>
        </nav>
        <div className="dark-light-mode">
          <button className="current-mode text-[22px] text-mainColor" onClick={handleChangeMode}>
            {isLightMode ? <FiSun /> : <FiMoon />
          }
          </button>
        </div>
       </div>
    </header>
  )
}

export default Header