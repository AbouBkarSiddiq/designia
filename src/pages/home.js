import React from 'react'
import '../App.css';
import { useHistory } from 'react-router-dom'
import background1 from '../assets/background1.png'
import placeholders from '../assets/Placeholders.png'
import arrow from '../assets/arrow.svg'
export default function Home() {
  let history = useHistory()
  return (
    <div style={{ background: `transparent url(${background1}) no-repeat scroll center`, backgroundSize: "" }} className='flex flex-1 items-center justify-center min-h-screen'> 
      <div className='flex flex-col flex-1 md:flex-row justify-between items-center w-full md:py-12 md:px-32'>
        <div className='flex flex-col justify-end w-2/3'>
          <h1 className='text-white font-sans font-medium xl:text-4xl'>We make thing done!</h1>
          <p className=' text-white font-sans font-normal md:text-3xl xl:text-2xl w-4/5'>Get your thing done by us at a very affordable cost. We make sure the quality content. We care</p>
          <div className='mt-4'>
            <button className='bg-white rounded-full px-2 text-blue-500 xl:px-8 xl:py-2'>Hire us!</button>
          </div>
        </div>
        <div className='flex flex-col px-4'>
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
