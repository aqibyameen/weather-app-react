import React from 'react'
import Bar from './Bar'

const ContactUs = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
          <div className="flex items-center w-full justify-center items-center mt-9">
            <div className='flex w-80 flex-col justify-center items-start mt-5 pl-24'>
        <Bar  />
      <h1 className='text-white text-3xl  '>Contact Us</h1>
      </div>
      </div>
      
<div className="flex mt-12 rounded-lg w-[400px] h-[340px]  ">
<form className=" mt-6 p-3 w-full ">
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
  </div>
 
  <div className="mb-5">
      <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <textarea type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>
  <button type="submit" className={`text-white  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-gradient-to-r from-cyan-500 to-blue-500`}>Submit</button>
</form>
</div>

      
    </div>
  )
}

export default ContactUs
