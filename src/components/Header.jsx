import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg"
import ReactToPrint from "react-to-print";
import { FiMoon, FiSun } from 'react-icons/fi'
import {IoIosColorPalette} from "react-icons/io"
import { FaDownload } from 'react-icons/fa6';
const Header = ({handleSetColor ,printRef}) => {
  const [isShowPallete , setIsShowPallete] = useState(false);
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
          <NavLink className="py-2 px-3 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/">Personnal Informations</NavLink>
          <NavLink className="py-2 px-3 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/educations">Educations</NavLink>
          <NavLink className="py-2 px-3 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/experiences">Experiences</NavLink>
          <NavLink className="py-2 px-3 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/skills">Skills</NavLink>
          <NavLink className="py-2 px-3 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/languages">Languages</NavLink>
          <NavLink className="py-2 px-3 transition duration-300 ease-linear text-mainColor dark:bg-slate-700 bg-slate-50 border-[1px] border-mainColor rounded-2xl" to="/references">References</NavLink>
        </nav>
        <div className="flex gap-4 items-center justify-center">
        <ReactToPrint
        trigger={() => (
          <button className="border-0 bg-mainColor flex items-center gap-3 justify-center uppercase font-[600] text-slate-50 fw-bold rounded-md mt-2 py-2 px-5">
            <FaDownload />
            download cv
          </button>
        )}
        content={() => printRef.current}
      />
          <div className="cv-color-container flex items-center justify-center relative">
          <button className="cv-color text-[25px] text-mainColor" onClick={()=>{setIsShowPallete(!isShowPallete)}}>
          <IoIosColorPalette />
          </button>
          {isShowPallete && 
          <div className="palletes-colors flex gap-2 items-center p-2 absolute top-[40px] right-0 w-[300px] h-[100px] bg-slate-50 shadow-md border-[1px] border-mainColor rounded-lg">
            <button onClick={()=>{handleSetColor("#fb8500") ; setIsShowPallete(false)}} className="color w-[50px] h-[50px] rounded-full" style={{background:"#fb8500"}}></button>
            <button onClick={()=>{handleSetColor("#06d6a0") ; setIsShowPallete(false)}} className="color w-[50px] h-[50px] rounded-full" style={{background:"#06d6a0"}}></button>
            <button onClick={()=>{handleSetColor("#d90429") ; setIsShowPallete(false)}} className="color w-[50px] h-[50px] rounded-full" style={{background:"#d90429"}}></button>
            <button onClick={()=>{handleSetColor("#3d405b") ; setIsShowPallete(false)}} className="color w-[50px] h-[50px] rounded-full" style={{background:"#3d405b"}}></button>
            <button onClick={()=>{handleSetColor("#5e60ce") ; setIsShowPallete(false)}} className="color w-[50px] h-[50px] rounded-full" style={{background:"#5e60ce"}}></button>
          </div>
          }
          </div>
        <div className="dark-light-mode flex items-center">
          <button className="current-mode text-[25px] text-mainColor" onClick={handleChangeMode}>
            {isLightMode ? <FiSun /> : <FiMoon />
          }
          </button>
          </div>
        </div>
       </div>
    </header>
  )
}

export default Header