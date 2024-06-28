import React from 'react'
import Bar from './Bar'

const AboutUs = () => {
  return (
    <div className='w-full'>
        <div className="flex items-center w-full justify-center items-center ">
            <div className='flex w-80 flex-col justify-center items-start mt-5 pl-24'>
        <Bar  />
      <h1 className='text-white text-3xl  '>About Us</h1>
      </div>
      </div>
      <div className="flex w-full mt-3 py-7 px-80">
        <p className='text-slate-400 text-center'>
        Welcome to Weather App, your go-to source for accurate and up-to-date weather information. Our mission is to provide you with reliable and easy-to-understand weather data to help you plan your day and stay prepared for any weather conditions.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
