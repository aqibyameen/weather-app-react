import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Navbar from './component/Navbar'
import Weather from './component/Weather'
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import Spinner from './component/Spinner';

const App = () => {
  const [location,setLoction]=useState('Islamabad');
  const [loading ,setLoading]=useState(true);

  const [response,setRes]=useState({
   
});
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://api.weatherapi.com/v1/current.json?key=140dcbfd7ab84055b3882412242306&q=${location}&aqi=no`).then((res)=>{
      console.log(res.data);
      setRes(res.data);
      setLoading(false);
      
    }).catch((err)=>{
      console.log(err.message);
      alert(err.message);
    })
  },[location])
  return (
    < div className=''>
    <Navbar setLocation={setLoction} />
    {
      loading ? <Spinner />:
    <Weather response={response}  />

    }
    

    
    <AboutUs />
    <ContactUs />
    <Footer />
    </div>
  )
}

export default App
