import React from 'react'
import { useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import Bar from './Bar';
import styles from './Navbar.module.css';
import axios from 'axios';



const Navbar = ({setLocation}) => {
  
  const values= useRef();
  const handleClick =()=>{
    if (values.current.value=="") {
      alert("Please enter a city name");
      return;
    }
  setLocation(values.current.value);
  values.current.value="";

  }
  return (
    <div className=' bg-black text-white w-full flex justify-around h-12 mt-4 '>
    <div className='flex flex-col justify-around items-start'>
      <Bar />
      <h1 className=' text-3xl md:text-2xl'>Weather App</h1></div>
    <div className="flex justify-center items-center w-96 mt-5 md:w-72 " ><input  ref={values} type='text'placeholder="Search city..."className='px-4 py-2 bg-black border-l border-t border-b border- rounded-l-full w-full'/><CiSearch onClick={handleClick} className='text-3xl   text-white h-[42px] cursor-pointer rounded-r-full w-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 '  /></div>
    <div className='flex '>
    <ul className='list-none flex justify-around items-center text-md gap-x-10 md:gap-x-8  '>

        <li  className='flex  flex-col'>
          <Bar />
          <a href="" className="">About Us</a></li>
          <li  className='flex  flex-col'>
          <Bar />
          <a href="" className="">Contact Us</a></li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar
