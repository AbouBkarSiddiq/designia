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
    <div style={{ background: `transparent url(${background1}) no-repeat scroll center`, backgroundSize: "" }} className='min-h-screen'>
      <Navbar />  
      <div className='flex flex-col md:flex-row justify-between items-center w-full md:py-20'>
        <div className='flex flex-col justify-end md:px-24 w-2/3'>
          <h1 className='text-white font-semibold text-xl xl:text-4xl'>We make thing done!</h1>
          <p className='mt-4 text-white font-normal xl:text-2xl'>Get your thing done by us at a very affordable cost. We make sure the quality content. We care</p>
          <div className='mt-4'>
            <button className='bg-white rounded-full px-2 text-blue-700 xl:px-4 xl:py-2'>Hire us</button>
          </div>
        </div>
        <div className='flex flex-col md:w-1/3'>
          <img src={placeholders} alt='' className='md:w-full md:h-full'/>
          <div className='flex justify-end'>
            <h1 className='text-white cursor-pointer'><span onClick={()=>history.push('/skills')}>Next page</span></h1>
            <img src={arrow} alt='' className='ml-1' />
          </div>
        </div>
      </div>    
    </div>
  )
}
