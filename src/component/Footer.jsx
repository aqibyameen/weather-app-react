import React from 'react'
import { CiFacebook, CiInstagram, CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    
    <div className='w-full'>
        <div className='w-full justify-center items-center  text-center text-white bg-slate-700 h-24 py-4 flex flex-col' >
            <h4 className='w-full text-center'>Made  by Aqib Yamin</h4>
            <div className="flex mt-2 justify-center text-xl items-center gap-2">
              <FaGithub/>
              <CiInstagram />
              <CiFacebook />
              <CiLinkedin />
              
            </div>
        </div>
    </div>
  )
}

export default Footer
