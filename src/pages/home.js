import React from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom'
import background1 from '../assets/background1.png'
import placeholders from '../assets/Placeholders.png'
import Navbar from '../components/navbar'
import arrow from '../assets/arrow.svg'
export default function Home() {
  let history = useHistory()
  return (
    <div style={{ background: `transparent url(${background1}) no-repeat scroll center`, backgroundSize: "cover" }} className='h-screen'>
      <Navbar />  
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:mt-40 ml-8 md:ml-32 lg:mt-44'>
          <h1 className='text-white font-bold text-xl'>We make thing done!</h1>
          <p className='w-4/5 mt-4 text-white font-normal'>Get your thing done by us at a very affordable cost. We make sure the quality content. We care</p>
          <div>
            <button className='mt-4 h-10 bg-white rounded-full text-blue-700 w-1/4'>Hire us</button>
          </div>
        </div>
        <div className='flex flex-col md:mt-32'>
          <img src={placeholders} alt='' className='w-3/5 h-3/5 md:w-full md:h-full'/>
          <div className='flex justify-end'>
            <h1 className='text-white cursor-pointer'><span onClick={()=>history.push('/skills')}>Next page</span></h1>
            <img src={arrow} alt='' className='ml-2' />
          </div>
        </div>
      </div>    
    </div>
  )
}

{/* <Navbar />
      */}