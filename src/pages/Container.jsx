import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'
import About from './About';



const Container = () => {
  return (
    <div className='w-full bg-black text-white relative overflow-hidden'>
        <Navbar />
        <Home/>
            <About/>
    </div>
  )
}

export default Container