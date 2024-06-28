import axios from 'axios'
import { LuThermometerSun } from "react-icons/lu";
import { FaWind } from "react-icons/fa";


import { WiHumidity } from "react-icons/wi";
const Weather = ({response}) => {
 
  return (
    <main className='text-white w-full flex justify-center items-center mt-5 p-16'>

      <div className='w-[500px] h-[450px] rounded-lg border border-slate-400 '>
        <h2 className='text-center mt-5 text-4xl md:3xl'>{response.location?.name}</h2>
        <div className="flex w-full justify-center gap-x-44">
          <div className="flex flex-col mt-6  justify-center items-start ">
            <h4 className='text-center text-2xl '>{response.current?.condition.text}</h4>
            <h4 className='text-center text-2xl'>{response.current?.temp_c} °C</h4>
            <p className='text-slate-300 mt-1'>Feels Like {response.current?.feelslike_c} °C</p>
          </div>
          <div className="flex flex-col mt-3 text-center   justify-center items-start ">
            <img src={response.current?.condition.icon} width='100px' alt="" />
            <p className='text-slate-300  text-center'>cloud {response.current?.cloud}%</p>

           
           </div>
        </div>
        <div className="flex justify-center px-4 mt-7 items-center">
        
          <div className="flex flex-col justify-center items-center mt-10  py-5  bg-gradient-to-r from-cyan-500 to-blue-500 w-[130px] h-[130px] rounded-lg p-5">
          <FaWind  className='flex  text-2xl  text-center sm:text-lg' />
        
          <p className='text-center text-lg'>Wind </p>
            
            <h2 className='text-center text-2xl bold'>{response.current?.wind_mph}mph</h2>
  
        </div>
        <div className="flex flex-col justify-center items-center mt-10 ml-9 py-5  bg-gradient-to-r from-cyan-500 to-blue-500 w-[130px] h-[130px] rounded-lg p-5">
        <LuThermometerSun  className='flex  text-3xl  text-center sm:text-lg' />
        <p className='text-center text-lg'>Heat Index</p>
                  
            <h2 className='text-center text-2xl bold'>{response.current?.heatindex_c}°C</h2>
  
        </div>
        <div className="flex flex-col justify-center items-center mt-10 ml-9 py-5  bg-gradient-to-r from-cyan-500 to-blue-500 w-[130px] h-[130px] rounded-lg p-5">
          <WiHumidity className='flex  text-5xl text-center sm:text-lg' />
        <p className='text-center text-xl'>Humidity</p>
            
            <h2 className='text-center text-2xl bold'>{response.current?.humidity}%</h2>
  
        </div>

        </div>
     
      </div>
    </main>
  )
}

export default Weather
